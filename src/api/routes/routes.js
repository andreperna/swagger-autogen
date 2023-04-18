import { router as routesGet } from "./routesGet.js";
import { router as routesPost } from "./routesPost.js";
import { router as routesPatch } from "./routesPatch.js";
import { router as routesDelete } from "./routesDelete.js";

import { Router } from "express";

export const router = Router();

router.use(routesGet);
router.use(routesPost);
router.use(routesPatch);
router.use(routesDelete);
