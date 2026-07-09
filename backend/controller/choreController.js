import { matchedData } from "express-validator";
import {
  getAllChoresService,
  createChoreService,
  getOneChoreService,
} from "../service/choreService.js";

export async function getAllChoresController(req, res) {
  const allChores = await getAllChoresService();
  res.status(200).json(allChores);
}

export async function getOneChoreController(req, res) {
  const choreId = req.params.id;
  const chore = await getOneChoreService(choreId);
  res.status(200).json(chore);
}

export async function createChoreController(req, res) {
  const createChore = matchedData(req);
  const choreData = await createChoreService(createChore);
  res.status(201).json(choreData);
}
