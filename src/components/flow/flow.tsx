import { useCallback, useEffect } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant,
  Panel,
} from "reactflow";

import "reactflow/dist/style.css";
import "./flow.css";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import DefaultNode from "./card-types/default-node";
import SpecialNode from "./card-types/special-node";
import { FlowService } from "../../services/flowService";
import mapNodeToCardData from "../../mappers/cardMapper";

const nodeTypes = { specialNode: SpecialNode, defaultNode: DefaultNode };

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    async function fetchData() {
      await FlowService.fetchAndSetCardsData(setNodes);
      await FlowService.fetchAndSetEdgesData(setEdges);
    }
    fetchData();
  }, []); // Empty dependency array to run only on initial mount

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  async function onAdd(){

	const cardDataArray = nodes.map((node) => mapNodeToCardData(node));
	
    await FlowService.AddCard(cardDataArray, setNodes);
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
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
  );
}

export default Flow;
