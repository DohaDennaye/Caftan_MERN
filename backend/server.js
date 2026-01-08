import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import caftanRoutes from "./routes/caftanRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.error("Erreur de connexion :", err));

app.use("/", caftanRoutes);

app.listen(5000, () => {
  console.log("Serveur démarré sur le port 5000");
});