import { getAllChoresService } from "../service/choreService.js";

export async function getAllChoresController(req, res) {
  const allChores = await getAllChoresService();
  res.status(200).json(allChores);
}
