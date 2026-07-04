import mongoose from "mongoose";
import {
  MIN_SUPPLIES_TITLE,
  MAX_SUPPLIES_TITLE,
  MIN_SUPPLIES_STOCK,
  MAX_SUPPLIES_STOCK,
} from "../config/constants.js";
const suppliesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: MIN_SUPPLIES_TITLE,
      max: MAX_SUPPLIES_TITLE,
    },
    fullStock: {
      type: Number,
      trim: true,
      min: MIN_SUPPLIES_STOCK,
      max: MAX_SUPPLIES_STOCK,
    },
  },
  { timestamps: true },
);

export const Supplies = mongoose.model("Supplies", suppliesSchema);
