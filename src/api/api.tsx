import axios from "axios";
import CardData from "../entities/flowCard";

function Api() {}

export async function getCards(): Promise<CardData[]> {
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

export default Api;
