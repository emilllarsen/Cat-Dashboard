import express from "express";
import {
  getAllCatsController,
  createNewCatController,
  getOneCatController
} from "../controller/catsController.js";
import { validateCat } from "../validation/validateInputs.js";
import validate from "../validation/validate.js";
const catRouter = express();

/**
 * What we need
 * Get all cats
 * Get one cat
 * Create a new cat
 * Modify the existing cat
 * Delete an cat
 */

catRouter.get("/cats", getAllCatsController); // get all cats
catRouter.get("/cats/:id", getOneCatController); // get one cat
catRouter.post("/cats", validateCat, validate, createNewCatController); // create a cat
// catRouter.patch("/cats/:id"); // update an cat
// catRouter.delete("/cats/:id"); // delete an cat

export default catRouter;
