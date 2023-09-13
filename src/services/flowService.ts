// FlowService.ts
import { getCards, getEdges } from "../api/api";
import CardData from "../entities/flowCard";
import EdgeData from "../entities/flowEdge";

export type SetNodesFunction = (nodes: CardData[]) => void;
export type SetEdgesFunction = (edges: EdgeData[]) => void;

export const FlowService = {
  async fetchAndSetCardsData(setNodes: SetNodesFunction) {
    try {
      const cards: CardData[] = await getCards();
      console.log("Cards data fetched", cards);
      const cardsWithStringIds = cards.map((card) => ({
        ...card,
        id: card.id.toString(),
      }));
      setNodes(cardsWithStringIds);
    } catch (error) {
      console.error("Error fetching cards data", error);
    }
  },

  async fetchAndSetEdgesData(setEdges: SetEdgesFunction) {
    try {
      const edges = await getEdges();
      const edgesWithStringIds = edges.map((edge) => ({
        ...edge,
        id: edge.id.toString(),
      }));
      setEdges(edgesWithStringIds);
    } catch (error) {
      console.error("Error fetching edges data", error);
    }
  },
};