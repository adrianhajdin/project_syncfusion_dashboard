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
export default CardData;