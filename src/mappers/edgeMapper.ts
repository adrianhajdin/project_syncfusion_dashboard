import{ Edge } from "reactflow";

class EdgeData {
  id: string;
  source: string;
  target: string;

  constructor(
    id: string,
    source: string,
    target: string
  ) {
    this.id = id;
	this.source = source;
	this.target = target;
  }
}

function mapEdgeToEdgeData(edge: Edge): EdgeData {
  // Extract the relevant properties from the Node object
  const { id, source, target } = edge;

  // Create a new EdgeData object
  const edgeData = new EdgeData(id, source, target || '');

  console.log("EdgeData", edgeData);

  return edgeData;
}

export default mapEdgeToEdgeData;
