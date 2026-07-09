import mongoose from "mongoose";
import { MIN_TITLE_LENGTH_CHORE, MAX_TITLE_LENGTH_CHORE } from "../config/constants.js";
const choreSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    min: MIN_TITLE_LENGTH_CHORE,
    max: MAX_TITLE_LENGTH_CHORE
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  repeat: {
    type: String,
    enum: ["none", "daily", "every2days", "Weekly", "every2weeks", "monthly"],
    default: "none"
  },
}, {
  timestamps: true
});
export const Chore = mongoose.model("Chore", choreSchema);
