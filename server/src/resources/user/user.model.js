import mongoose from "mongoose";
import RegExManager from "../../utils/RegexManager";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: RegExManager.validateEmail },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    followingCategories: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    ],
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  },
  { timestamps: true }
);

userSchema.index({ name: 1, email: 1 }, { unique: true });

module.exports = {
  Model: mongoose.model("User", userSchema),
  propGeneral: [
    "name",
    "email",
    "avatar",
    "favorites",
    "followingCategories",
    "recipes",
  ],
  propMini: ["name", "email", "avatar"],
};
