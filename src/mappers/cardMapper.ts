import{ Node } from "reactflow";

class CardData {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
    title: string;
    subject: string;
  };
  type: string;

  constructor(
    id: string,
    position: {
      x: number;
      y: number;
    },
    data: {
      label: string;
      title: string;
      subject: string;
    },
    type: string
  ) {
    this.id = id;
    this.position = position;
    this.data = data;
    this.type = type;
  }
}

function mapNodeToCardData(node: Node): CardData {
  // Extract the relevant properties from the Node object
  const { id, position, data, type } = node;

  // Create a new CardData object
  const cardData = new CardData(id, position, data, type || '');

  return cardData;
}

export default mapNodeToCardData;
