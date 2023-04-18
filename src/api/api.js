import express from "express";
import { router as routesIndex } from "./routes/routes.js";

export const api = express();

api.use(routesIndex);
