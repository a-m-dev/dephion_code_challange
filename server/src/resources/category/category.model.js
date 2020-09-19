import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cover: { type: String, required: true },
    recipesCount: { type: Number, required: true, default: 0 },
    followers: { type: Number, required: true, default: 0 },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

categorySchema.index({ name: "text" }, { unique: true });

module.exports = {
  Model: mongoose.model("Category", categorySchema),
  propGeneral: ["name", "description", "cover", "recipesCount", "followers"],
};
