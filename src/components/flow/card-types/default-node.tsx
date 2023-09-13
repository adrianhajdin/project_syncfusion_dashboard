import { Handle, Position } from 'reactflow';
import "./default-node.css";

interface DefaultNodeProps {
	isConnectable: boolean;
	data: any; //todo: type this
}

function DefaultNode({ isConnectable, data }: DefaultNodeProps) {
	return (
		<>
			<div >
				<div className="Base-Node flex flex-col items-center" >
					<div className="m-1"><h1>{data.title}</h1></div>
					<div className="m-1"><h1>{data.subject}</h1></div>
				</div>
				<Handle type="target" position={Position.Top} id="a" isConnectable={isConnectable} />
				<Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
			</div>
		</>
	);
}

export default DefaultNode;