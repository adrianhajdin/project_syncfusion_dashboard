class EdgeData {
  id: string;
  source: string;
  target: string;

  constructor(id: string, source: string, target: string) {
    this.id = id;
    this.source = source;
    this.target = target;
  }
}

export default EdgeData;
