import axios from "axios";
import CardData from "../entities/flowCard";
import EdgeData from "../entities/flowEdge";

function Api() {}

export async function getCards() {
  try {
    const response = await axios.get("http://localhost:3000/cards");
    const cards = response.data as CardData[];
    console.log("test", cards);
    return cards;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getEdges() {
  try {
    const response = await axios.get("http://localhost:3000/edges");
    const edges = response.data as EdgeData[];
    console.log("test", edges);
    return edges;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default Api;
