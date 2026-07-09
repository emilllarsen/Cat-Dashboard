import express from "express";
import {
  getAllCatsController,
  createNewCatController,
  getOneCatController,
  updateCatController,
} from "../controller/catsController.js";
import {
  validateCreateCat,
  validateUpdateCat,
} from "../validation/validateInputs.js";
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
catRouter.post("/cats", validateCreateCat, validate, createNewCatController); // create a cat
catRouter.patch("/cats/:id", validateUpdateCat, validate, updateCatController); // update an cat
// catRouter.delete("/cats/:id"); // delete an cat

export default catRouter;
