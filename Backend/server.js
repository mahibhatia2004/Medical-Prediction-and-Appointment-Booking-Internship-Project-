import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRouter from "./src/routes/health.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
