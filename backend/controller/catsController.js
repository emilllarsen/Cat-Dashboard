import { matchedData } from "express-validator";
import {
  getallCatsService,
  getOneCatService,
  createCatService,
  updateCatService,
  deleteCatService,
} from "../service/catService.js";

export async function getAllCatsController(req, res) {
  const cats = await getallCatsService();
  res.status(200).json(cats);
}

export async function createNewCatController(req, res) {
  const newCat = matchedData(req);
  const createdCat = await createCatService(newCat);
  res.status(201).json(createdCat);
}

export async function getOneCatController(req, res) {
  const catId = req.params.id;
  const getCat = await getOneCatService(catId);
  res.status(200).json(getCat);
}
export async function updateCatController(req, res) {
  const catId = req.params.id;
  const catData = matchedData(req);
  const updatedCat = await updateCatService(catId, catData);
  res.status(200).json(updatedCat);
}

export async function deleteCatController(req, res) {
  const catId = req.params.id;
  const deletedCat = await deleteCatService(catId);
  res.status(200).json(deletedCat);
}
