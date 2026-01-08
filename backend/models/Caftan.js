import mongoose from "mongoose";

const caftanSchema = new mongoose.Schema(
  {
    nom: String,
    categorie: String,
    origine: {
      ville: String,
      style: String,
    },
    composition: {
      pieces: Number,
      tissus: [String],
      doublure: String,
    },
    details_artisanaux: {
      broderies: {
        type: String,
        fil: String,
        motifs: [String],
      },
      ornements: [String],
      ceinture: {
        incluse: Boolean,
        nom: String,
        matière: String,
      },
    },
    dimensions: {
      taille: String,
      longueur: Number,
      unite: String,
    },
    disponibilite: {
      en_stock: Boolean,
      prix: Number,
      devise: String,
    },
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Caftan", caftanSchema);