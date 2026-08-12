import { body } from "express-validator";
import {
  MIN_TITLE_LENGTH_CHORE,
  MAX_TITLE_LENGTH_CHORE,
} from "../config/constants.js";
import { dueDateNotInThePast } from "../service/choreService.js";
export const validateCreateChore = [
  body("title")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Title cannot be empty!")
    .isLength({ min: MIN_TITLE_LENGTH_CHORE, max: MAX_TITLE_LENGTH_CHORE })
    .withMessage(
      `Title must be between ${MIN_TITLE_LENGTH_CHORE} - ${MAX_TITLE_LENGTH_CHORE} characters long`,
    ),
  body("dueDate").isISO8601().custom(dueDateNotInThePast), // function for that due date cannot be date that is passed - NOT WORKING
];

export const validateUpdateChore = [
  body("title")
    .optional()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Title cannot be empty!")
    .isLength({ min: MIN_TITLE_LENGTH_CHORE, max: MAX_TITLE_LENGTH_CHORE })
    .withMessage(
      `Title must be between ${MIN_TITLE_LENGTH_CHORE} - ${MAX_TITLE_LENGTH_CHORE} characters long`,
    ),
  body("dueDate").optional().isISO8601().custom(dueDateNotInThePast), // function for that due date cannot be date that is passed - NOT WORKING
];
