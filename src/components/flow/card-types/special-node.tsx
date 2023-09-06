import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./special-node.css";

interface SpecialNodeProps {
	isConnectable: boolean;
	data: any; //todo: type this
}

function SpecialNode({ isConnectable }: SpecialNodeProps) {
	const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
		console.log(evt.target.value);
	}, []);

	return (
		<>	
			<div className="Base-Node" onChange={onChange}>
				<Handle type="target" position={Position.Top} isConnectable={isConnectable} />
					<label htmlFor="text">special</label>
				<Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
			</div>
		</>
	);
}

export default SpecialNode;