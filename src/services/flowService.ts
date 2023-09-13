// FlowService.ts
import Api from "../api/api";
import CardData from "../entities/flowCard";
import EdgeData from "../entities/flowEdge";

export type SetNodesFunction = (nodes: CardData[]) => void;
export type SetEdgesFunction = (edges: EdgeData[]) => void;

export const FlowService = {
  async fetchAndSetCardsData(setNodes: SetNodesFunction) {
    try {
      const cards: CardData[] = await Api.getCards();
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
      await Api.addCard(newNode);
      setNodes([...nodes, newNode]);
    } catch (error) {
      console.error("Error adding card", error);
    }
  },

  async updateCard(
    nodes: CardData[],
    nodeId: string,
    position: { x: number; y: number },
    setNodes: SetNodesFunction
  ) {
    try {
      const nodeToUpdate = nodes.find((node) => node.id === nodeId);
      if (!nodeToUpdate) {
        throw new Error(`Node with id ${nodeId} not found`);
      }
      const updatedNode = {
        ...nodeToUpdate,
        position,
      };
      await Api.updateCard(updatedNode);
      const updatedNodes = nodes.map((node) =>
        node.id === nodeId ? updatedNode : node
      );
      setNodes(updatedNodes);
    } catch (error) {
      console.error("Error updating card", error);
    }
  },

  async fetchAndSetEdgesData(setEdges: SetEdgesFunction) {
    try {
      const edges = await Api.getEdges();
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
      // Add the edge to the server (assuming you have an addEdge function in your API)
      await Api.addEdge(newEdge);

      // Update the local edges state by concatenating the new edge to the existing edges
      setEdges([...edges, newEdge]);
    } catch (error) {
      console.error("Error adding edge", error);
    }
  },
};
