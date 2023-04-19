import express from "express";
import { router as routesIndex } from "./routes/routes.js";
import { serve, setup } from "swagger-ui-express";

import swaggerDoc from "../swagger/swagger-output.json" assert { type: "json" };

export const api = express();

console.log(swaggerDoc);

api.use("/doc", serve, setup(swaggerDoc));
api.use(routesIndex);
