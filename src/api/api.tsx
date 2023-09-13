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

export async function addCard(card: CardData) {
  try {
    const response = await axios.post("http://localhost:3000/cards", card);
    const newCard = response.data as CardData;
    return newCard;
  } catch (error) {
    console.error(error);
    return null;
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

export async function addEdge(edge: EdgeData) {
  try {
    const response = await axios.post("http://localhost:3000/edges", edge);
    const newEdge = response.data as EdgeData;
    return newEdge;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default Api;
