import { useCallback } from "react";
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

const nodeTypes = { specialNode: SpecialNode, defaultNode: DefaultNode };

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "1", title: "IPC Triggering", subject: "Code: COM_IPC_TRG" },
    type: "defaultNode",
  },
  {
    id: "2",
    position: { x: 100, y: 200 },
    data: { label: "2", title: "IPC Triggering", subject: "Code: COM_IPC_TRG" },
    type: "defaultNode",
  },
  {
    id: "3",
    position: { x: 100, y: 300 },
    data: {
      label: "3",
      title: "KV Trigger Update",
      subject: "Chapter: COM_IPC_SPE",
    },
    type: "specialNode",
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
