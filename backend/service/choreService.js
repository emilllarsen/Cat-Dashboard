import { BusinessLogicError } from "../utils/errors.js";
import { Chore } from "../models/chores.js";

export function dueDateNotInThePast(value) {
  const todaysDate = new Date();
  if (value < todaysDate) {
    throw new BusinessLogicError("Cannot set a due date in the past");
  }
  return true;
}

export async function getAllChoresService() {
  const chore = await Chore.find();
  if(!chore){
    throw new BusinessLogicError("Could not find any chores", 404);
  }
  return chore;
}

export async function createChoreService(choreData){
  const createdChore = await Chore.create(choreData);
  if(!createdChore){
    throw new BusinessLogicError("Could not create a new chore", 400);
  }
  return createdChore;
}