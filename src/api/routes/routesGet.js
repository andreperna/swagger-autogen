import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => res.json({ get: req.url }));

router.get("/status", (req, res) => res.json({ status: "ok" }));

router.get("/apps", (req, res) => res.json({ get: req.url }));

router.get("/:appName", (req, res) => res.json({ appName: req.params.appName }));

router.get("/:appName/:tableName", (req, res) =>
  res.json({ appName: req.params.appName, tableName: req.params.tableName })
);

router.get("/:appName/:tableName/:id", (req, res) =>
  res.json({ appName: req.params.appName, tableName: req.params.tableName, id: req.params.id })
);
