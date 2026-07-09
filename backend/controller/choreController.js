import { matchedData } from "express-validator";
import {
  getAllChoresService,
  createChoreService,
  getOneChoreService,
  updateChoreService,
  deleteChoreService
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

export async function updateChoreController(req, res) {
  const choreId = req.params.id;
  const choreData = matchedData(req);
  const updateChore = await updateChoreService(choreId, choreData);

  res.status(200).json(updateChore);
}

export async function deleteChoreController(req, res){
    const choreId = req.params.id;
    const deleteChore = await deleteChoreService(choreId);

    res.status(200).json(deleteChore);
}