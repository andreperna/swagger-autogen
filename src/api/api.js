import express from "express";
import { router as routesIndex } from "./routes/routes.js";
import { serve, setup } from "swagger-ui-express";
// import swaggerDoc from "../swagger/swagger-output.json" assert { type: "json" };


export const api = express();


api.use("/doc", serve, setup("src/swagger/swagger-output.json"));
api.use(routesIndex);
