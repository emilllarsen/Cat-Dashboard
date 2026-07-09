import mongoose from "mongoose";
import {
  MIN_WEIGHT_TARGET,
  MAX_WEIGHT_TARGET,
  MIN_LENGTH_CAT_NAME,
  MAX_LENGTH_CAT_NAME,
  MIN_WEIGHT,
  MAX_WEIGHT,
  MIN_LENGTH_CAT_AGE,
  MAX_LENGTH_CAT_AGE
} from "../config/constants.js";

const catsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      min: MIN_LENGTH_CAT_NAME,
      max: MAX_LENGTH_CAT_NAME,
    },
    age: {
      type: Number,
      trim: true,
      required: true,
      min: MIN_LENGTH_CAT_AGE,
      max: MAX_LENGTH_CAT_AGE
    },
    targetMin: {
      type: Number,
      required: true,
      trim: true,
      min: MIN_WEIGHT_TARGET,
      max: MAX_WEIGHT_TARGET,
    },
    targetMax: {
      type: Number,
      required: true,
      trim: true,
      min: MIN_WEIGHT_TARGET,
      max: MAX_WEIGHT_TARGET,
    },
    weight: {
      type: Number,
      trim: true,
      required: true,
      min: MIN_WEIGHT,
      max: MAX_WEIGHT,
    },
  },
  {
    timestamps: true,
  },
);

export const Cats = mongoose.model("Cats", catsSchema);
