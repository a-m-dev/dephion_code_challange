import Router from "express";

import RecipeController from "./recipe.controller";
import ValidatorParserTypes from "../../constants/ValidatorParserTypes";
// middlewares
import dataValidator from "../../middlewares/dataValidator.middleware";
import ImageUploader from "../../middlewares/imageUploader.middleware";
import authenticateToken from "../../middlewares/authenticateToken.middleware";
// validation schemas
import createRecipeSchema from "../../validators/createRecipeSchema";
import updateRecipeValidationSchema from "../../validators/updateRecipeSchema";
import recipeIdValidatorSchema from "../../validators/recipeIdSchema";

const RecipeRouter = Router();

RecipeRouter.route("/getRecipe/:recipeId").get(
  dataValidator(recipeIdValidatorSchema, ValidatorParserTypes.PARAM),
  RecipeController.getRecipe
);

RecipeRouter.route("/getRecipeList").get(RecipeController.getRecipeList);
RecipeRouter.route("/getRecipeByCategory/:categoryId").get(
  RecipeController.getRecipeByCategory
);
RecipeRouter.route("/createRecipe").post(
  ImageUploader.single("cover"),
  dataValidator(createRecipeSchema, ValidatorParserTypes.BODY),
  authenticateToken,
  RecipeController.createRecipe
);

RecipeRouter.route("/updateRecipe/:recipeId").patch(
  ImageUploader.single("cover"),
  dataValidator(updateRecipeValidationSchema, ValidatorParserTypes.BODY_PARAM),
  authenticateToken,
  RecipeController.updateRecipe
);

RecipeRouter.route("/deleteRecipe/:recipeId").delete(
  authenticateToken,
  RecipeController.removeRecipe
);

RecipeRouter.route("/favoriteRecipe").put(
  dataValidator(recipeIdValidatorSchema, ValidatorParserTypes.BODY),
  authenticateToken,
  RecipeController.favoriteRecipe
);
RecipeRouter.route("/shareRecipe").put(
  dataValidator(recipeIdValidatorSchema, ValidatorParserTypes.BODY),
  RecipeController.shareRecipe
);

export default RecipeRouter;
