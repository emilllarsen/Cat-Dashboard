import { BusinessLogicError } from "../utils/errors.js";
export function dueDateNotInThePast(value) {
  const todaysDate = new Date();
  if (value < todaysDate) {
    throw new BusinessLogicError("Cannot set a due date in the past");
  }
  return true;
}
