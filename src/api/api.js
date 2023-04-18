import express from "express";
import { router } from "./routes/routes.js";

export const api = express();

api.use(router);
