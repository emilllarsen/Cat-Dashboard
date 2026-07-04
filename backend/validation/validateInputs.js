import { body } from "express-validator";
import {
  MIN_LENGTH_CAT_NAME,
  MAX_LENGTH_CAT_NAME,
  MIN_LENGTH_CAT_AGE,
  MAX_LENGTH_CAT_AGE,
  MIN_WEIGHT,
  MAX_WEIGHT,
  MIN_WEIGHT_TARGET,
  MAX_WEIGHT_TARGET,
} from "../config/constants.js";
const validateCat = [
  body("name")
    .trim()
    .notEmpty()
    .escape()
    .isLength({ min: MIN_LENGTH_CAT_NAME, max: MAX_LENGTH_CAT_NAME })
    .withMessage(
      `Name of your cat needs to be between ${MIN_LENGTH_CAT_NAME} and ${MAX_LENGTH_CAT_NAME} characters`,
    ),
  body("profilePic"), //TODO: Here we need to validate the file extension, the size and mime types
  body("age")
    .notEmpty()
    .withMessage("You must enter an age")
    .isInt({ min: MIN_LENGTH_CAT_AGE, max: MIN_LENGTH_CAT_AGE })
    .withMessage(
      `Age must be between ${MIN_LENGTH_CAT_AGE} and ${MAX_LENGTH_CAT_AGE}`,
    )
    .toInt(),
  body("targetMin")
    .notEmpty()
    .withMessage("You need to input a target minimum weight")
    .isFloat({ min: MIN_WEIGHT_TARGET, max: MAX_WEIGHT_TARGET })
    .withMessage(
      `Weight minimum bust be between ${MIN_WEIGHT_TARGET} and ${MAX_WEIGHT_TARGET}`,
    ),
  body("targetMax")
    .notEmpty()
    .withMessage("You need to input a target maximum weight")
    .isFloat({ min: MIN_WEIGHT_TARGET, max: MAX_WEIGHT_TARGET })
    .withMessage(
      `Weight maximum bust be between ${MIN_WEIGHT_TARGET} and ${MAX_WEIGHT_TARGET}`,
    ),
  body("weight")
    .notEmpty()
    .withMessage("You need to input a weight")
    .isFloat({ min: MIN_WEIGHT, max: MAX_WEIGHT })
    .withMessage(`Weight bust be between ${MIN_WEIGHT} and ${MAX_WEIGHT}`), // TODO: have a custom function to check if inputed a valid age
];

export default {
  validateCat,
};
