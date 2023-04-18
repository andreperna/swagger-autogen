import { Router } from "express";

export const router = Router();

router.patch("/:appName/:tableName/:id", (req, res) =>
  res.json({ patch: { appName: req.params.appName, tableName: req.params.tableName, id: req.params.id } })
);
