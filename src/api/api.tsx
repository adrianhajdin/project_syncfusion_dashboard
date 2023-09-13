import axios from "axios";
import CardData from "../entities/flowCard";
import EdgeData from "../entities/flowEdge";

class Api {
  static async getCards() {
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

  static async addCard(card: CardData) {
    try {
      const response = await axios.post("http://localhost:3000/cards", card);
      const newCard = response.data as CardData;
      return newCard;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async updateCard(card: CardData) {
    try {
      const response = await axios.put(
        `http://localhost:3000/cards/${card.id}`,
        card
      );
      const updatedCard = response.data as CardData;
      return updatedCard;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getEdges() {
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

  static async addEdge(edge: EdgeData) {
    try {
      const response = await axios.post("http://localhost:3000/edges", edge);
      const newEdge = response.data as EdgeData;
      return newEdge;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default Api;
