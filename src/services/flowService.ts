// FlowService.ts
import { addCard, addEdge, getCards, getEdges } from "../api/api";
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

  async addCard(nodes: CardData[], setNodes: SetNodesFunction) {
    try {
      const newNode = {
        id: (nodes.length + 1).toString(),
        position: { x: 0, y: 0 },
        data: {
          label: (nodes.length + 1).toString(),
          title: "New Node",
          subject: "New Subject",
        },
        type: "defaultNode",
      };
      await addCard(newNode);
      setNodes([...nodes, newNode]);
    } catch (error) {
      console.error("Error adding card", error);
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

  async addEdge(
    edges: EdgeData[],
    sourceNodeId: string,
    targetNodeId: string,
    setEdges: SetEdgesFunction
  ) {
    try {
      // Create a new edge object
      const newEdge: EdgeData = {
        id: `e${sourceNodeId}-${targetNodeId}`,
        source: sourceNodeId,
        target: targetNodeId,
      };

      console.log("New edge", newEdge);

      // Add the edge to the server (assuming you have an addEdge function in your API)
      await addEdge(newEdge);

      // Update the local edges state by concatenating the new edge to the existing edges
      setEdges([...edges, newEdge]);
    } catch (error) {
      console.error("Error adding edge", error);
    }
  },
};
