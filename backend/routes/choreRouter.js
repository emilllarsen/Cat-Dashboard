import express from "express";
import validate from "../validation/validate.js";
import {
  validateCreateChore,
  validateUpdateChore,
} from "../validation/validateChoreInput.js";
import {
  getAllChoresController,
  createChoreController,
  getOneChoreController,
  updateChoreController
} from "../controller/choreController.js";
const choreRouter = express();

/**
 * What we need
 * get all chores
 * get one chore
 * create new chore
 * edit existing chore
 * delete chore
 */

choreRouter.get("/chore", getAllChoresController); // Get all chores
choreRouter.get("/chore/:id", getOneChoreController); // Get one Chore
choreRouter.post("/chore", validateCreateChore, validate, createChoreController); // create new chore
choreRouter.patch("/chore/:id", validateUpdateChore, validate, updateChoreController); // Update chore
// choreRouter.delete("/chore/:id"); // Delete chore

export default choreRouter;
