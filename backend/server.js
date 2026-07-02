import express from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./config/db.js";
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

// app.get("/", (req, res) => {
//   res.json({ message: "Connection Successful" });
// });

const httpServer = app.listen(process.env.BACKEND_PORT);
httpServer.on("listening", () => {
  console.log("Server is open in port:", httpServer.address().port);
});

function gracefulShutdown() {
  console.log("\nShutting down server...");
  httpServer.close(async () => {
    await disconnectDB();
    console.log("Server is shut down!");
    process.exit(0);
  });
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
