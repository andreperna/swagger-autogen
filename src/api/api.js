import express from "express";
import { swaggerMiddleware } from "../swagger/swaggerMiddleware.js";
import { router as routesIndex } from "./routes/routes.js";
// import swaggerDoc from "../swagger/swagger-output.json" assert { type: "json" };


export const api = express();


api.use("/doc", swaggerMiddleware)
api.use(routesIndex);
