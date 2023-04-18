import { Router } from "express";

export const router = Router();

router.delete("/:appName/:tableName/:id", (req, res) =>
  res.json({ delete: { appName: req.params.appName, tableName: req.params.tableName } })
);
