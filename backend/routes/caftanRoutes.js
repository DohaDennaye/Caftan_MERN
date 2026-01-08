import express from "express";
import Caftan from "../models/Caftan.js";

const router = express.Router();

// GET tous les caftans
router.get("/", async (req, res) => {
  try {
    const caftans = await Caftan.find();
    res.json(caftans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET un caftan par ID
router.get("/:id", async (req, res) => {
  try {
    const caftan = await Caftan.findById(req.params.id);
    res.json(caftan);
  } catch (error) {
    res.status(404).json({ message: "Caftan introuvable" });
  }
});

export default router;