import mongoose from "mongoose";

const choreSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  repeat: {
    type: String,
    enum: ["none", "daily", "every2days", "Weekly", "every2weeks", "monthly"],
    default: "None"
  },
});
export const Chore = mongoose.model("Chore", choreSchema);
