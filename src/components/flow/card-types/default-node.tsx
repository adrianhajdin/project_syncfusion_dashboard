import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./default-node.css";

interface DefaultNodeProps {
	isConnectable: boolean;
	data: any; //todo: type this
}

function DefaultNode({ isConnectable }: DefaultNodeProps) {
	const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
	}, []);

	return (
		<>
			<div className="Base-Node" >
				<div>
					<label htmlFor="text">Text:</label>
					<input id="text" name="text" onChange={onChange} className="nodrag" />
				</div>
				<Handle type="target" position={Position.Top} id="a" isConnectable={isConnectable} />
				<Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
			</div>
		</>
	);
}

export default DefaultNode;