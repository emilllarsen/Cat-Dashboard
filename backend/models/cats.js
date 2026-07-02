import mongoose from "mongoose";
import { MIN_WEIGHT_TARGET, MAX_WEIGHT_TARGET } from "../config/constants.js";

const catsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://example.com",
    },
    age: {
      type: Number,
      trim: true,
      required: true,
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
      min: MIN_WEIGHT_TARGET,
      max: MAX_WEIGHT_TARGET,
    },
  },
  {
    timestamps: true,
  },
);

export const Cats = mongoose.model("Cats", catsSchema);
