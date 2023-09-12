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
import CardData from "../../entities/flowCard";

const nodeTypes = { specialNode: SpecialNode, defaultNode: DefaultNode };

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    // Fetch data from your JSON Server
    fetch("http://localhost:3000/cards") 
      .then((response) => response.json())
      .then((data) => {
		console.log('data', data);
        const nodeData = data.map((card : CardData) => ({
          id: card.id.toString(),
          position: card.position,
          data: {
            title: card.data.title,
            subject: card.data.subject,
          },
          type: card.type,
        }));

		console.log('it is done', nodeData);
        // Set the fetched data as nodes
        setNodes(nodeData);

        // You can also set edges if needed
        // const edgeData = ...
        // setEdges(edgeData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onAdd = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 0 },
      data: {
        label: (nodes.length + 1).toString(),
        title: "New Node",
        subject: "New Subject",
      },
      type: "defaultNode",
    };
    setNodes((nodes) => nodes.concat(newNode));
  };

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
