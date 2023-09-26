import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  BackgroundVariant,
  Panel,
  Node,
} from "reactflow";

import "reactflow/dist/style.css";
import "./flow.css";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import DefaultNode from "./card-types/default-node";
import SpecialNode from "./card-types/special-node";
import { FlowService } from "../../services/flowService";
import mapNodeToCardData from "../../mappers/cardMapper";
import mapEdgeToEdgeData from "../../mappers/edgeMapper";
import {
  ContextMenuComponent,
  MenuItemModel,
} from "@syncfusion/ej2-react-navigations";
import Modal from "./Modal/modal-dialog";
import CardData from "../../entities/flowCard";

const nodeTypes = { specialNode: SpecialNode, defaultNode: DefaultNode };

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedNodeData, setSelectedNodeData] = useState<CardData | null>(
    null
  );

  const menuItems: MenuItemModel[] = [
    {
      text: "Cut",
    },
    {
      text: "Copy",
    },
    {
      text: "Paste",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      await FlowService.fetchAndSetCardsData(setNodes);
      await FlowService.fetchAndSetEdgesData(setEdges);
    }
    fetchData();
  }, []); // Empty dependency array to run only on initial mount

  async function onAdd() {
    const cardDataArray = nodes.map((node) => mapNodeToCardData(node));
    await FlowService.addCard(cardDataArray, setNodes);
  }

  const handleConnect = useCallback(
    async (sourceNodeId: string, targetNodeId: string) => {
      const edgeDataArray = edges.map((edge) => mapEdgeToEdgeData(edge));
      await FlowService.addEdge(
        edgeDataArray,
        sourceNodeId,
        targetNodeId,
        setEdges
      );
    },
    [edges, setEdges]
  );

  // Use handleConnect in your onConnect callback
  const onConnect = useCallback(
    async (params: Edge | Connection) => {
      if (params.source && params.target) {
        const sourceNodeId = params.source;
        const targetNodeId = params.target;
        await handleConnect(sourceNodeId, targetNodeId);
      }
    },
    [handleConnect]
  );

  const onNodeDoubleClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (node) {
        // Store the data of the selected node
		const selectedCard : CardData = mapNodeToCardData(node);
		if(selectedCard){
			setSelectedNodeData(selectedCard);
		}
        // Open the modal
        setIsModalOpen(true);
      }
    },
    []
  );

  const handleNodeChange = useCallback(
    async (node: Node) => {
      const cardDataArray = nodes.map((node) => mapNodeToCardData(node));
      await FlowService.updateCard(
        cardDataArray,
        node.id,
        node.position,
        setNodes
      );
    },
    [nodes, setNodes]
  );

  // Use handleConnect in your onConnect callback
  const onNodeChanged = useCallback(
    async (params: React.MouseEvent, node: Node) => {
      if (params) {
        await handleNodeChange(node);
      }
    },
    [handleNodeChange]
  );

  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }} id="target">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onNodeDragStop={onNodeChanged}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onNodeDoubleClick={onNodeDoubleClick}
          fitView
        >
          <Panel position="top-right">
            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                <ButtonComponent
                  cssClass="e-small e-round"
                  iconCss="e-btn-sb-icons e-add-icon"
                  isPrimary
                  onClick={onAdd}
                ></ButtonComponent>
              </div>
            </div>
          </Panel>
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
      <ContextMenuComponent target="#target" items={menuItems} />
      {/* Render the Modal component */}
      {isModalOpen && (
        <Modal data={selectedNodeData} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default Flow;
