import express from "express";

export const api = express();

api.get("/", (req, res) => {
  res.json({ status: "ok" });
});