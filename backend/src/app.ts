import express from "express";
import apiRouter from "./routes/index.js"; // This points to your new Gateway router

const app = express();
app.use(express.json());

// Routes
app.use("/api", apiRouter);

export default app;
