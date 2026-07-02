import mongoose from "mongoose";
import { BusinessLogicError } from "../utils/errors.js";

const { DB_PROTOCOL, DB_HOSTNAME, DB_PORT, DB_NAME, NODE_ENV } = process.env;

const DB_URI = `${DB_PROTOCOL}://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;

export function connectDB() {
  if (DB_PROTOCOL && DB_HOSTNAME && DB_PORT && DB_NAME) {
    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error", err);
    });
    console.log(`Connection to db..`, DB_URI);
    return mongoose.connect(DB_URI, {
      appName: `${DB_NAME} - ${NODE_ENV}`,
    });
  }
  throw new BusinessLogicError("Missing env variables...", 400);
}

export function disconnectDB() {
  return mongoose.disconnect();
}
