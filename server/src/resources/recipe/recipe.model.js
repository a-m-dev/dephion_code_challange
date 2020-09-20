import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    cover: { type: String, required: true },
    numberOfServing: { type: Number, required: true },
    cookingTime: { type: Number, required: true },
    ingredients: [{ type: String }],
    preparationSteps: [{ type: String }],
    favorites: { type: Number, required: true, default: 0 },
    shares: { type: Number, required: true, default: 0 },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = {
  Model: mongoose.model("Recipe", recipeSchema),
  propGeneral: ["name", "cover", "numberOfServing"],
};
