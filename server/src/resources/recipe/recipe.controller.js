import {
  Model as RecipeModel,
  propGeneral as recipePropGeneral,
} from "./recipe.model";
import {
  Model as UserModel,
  propMini as userPropMini,
} from "../user/user.model";
import ResponseGenerator from "../../utils/ResponseGenerator";
import RequestFailureReasons from "../../constants/RequestFailureReasons";

const RecipeController = {};

/**
 * Get Single recipe
 */
RecipeController.getRecipe = async (req, res, next) => {
  const { recipeId } = req.params;

  try {
    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId });

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "Found Recipe",
        result: {
          _id: foundedRecipe._id,
          name: foundedRecipe.name,
          cover: foundedRecipe.cover,
          numberOfServing: foundedRecipe.numberOfServing,
          cookingTime: foundedRecipe.cookingTime,
          ingredients: foundedRecipe.ingredients,
          preparationSteps: foundedRecipe.preparationSteps,
          favorites: foundedRecipe.favorites,
          shares: foundedRecipe.shares,
          creator: foundedRecipe.creator,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "cannot find recipe",
      })
    );
  }
};

/**
 * Get Recipe list
 */
RecipeController.getRecipeList = async (req, res, next) => {
  try {
    const recipes = await RecipeModel.find()
      .populate("creator", userPropMini)
      .exec();

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "list is here",
        result: {
          recipeCount: recipes.length,
          recipes: recipes.map((recipe) => {
            let result = recipe.toJSON();

            return {
              _id: result._id,
              name: result.name,
              cover: result.cover,
              numberOfServing: result.numberOfServing,
              cookingTime: result.cookingTime,
              ingredients: result.ingredients,
              preparationSteps: result.preparationSteps,
              favorites: result.favorites,
              shares: result.shares,
              creator: result.creator,
            };
          }),
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "something wrong happened",
      })
    );
  }
};

/**
 * Create Recipe
 */
RecipeController.createRecipe = async (req, res, next) => {
  const userId = req.user.user_id;
  const {
    name,
    numberOfServing,
    cookingTime,
    ingredients,
    preparationSteps,
  } = req.body;
  const cover = (req.file && req.file.path) || undefined;

  console.log({
    name,
    numberOfServing,
    cookingTime,
    ingredients,
    preparationSteps,
  });

  if (!cover) {
    return res.status(400).json(
      ResponseGenerator.failure({
        code: 400,
        reason: RequestFailureReasons.BAD_REQUEST,
        message: "Provide image",
      })
    );
  }

  try {
    let foundedRecipe = await RecipeModel.findOne({ name });
    foundedRecipe = foundedRecipe && foundedRecipe.toJSON();

    if (foundedRecipe) {
      return res.status(409).json(
        ResponseGenerator.failure({
          code: 409,
          reason: RequestFailureReasons.RESOURCE_EXSISTS_ALREADY,
          message: "Recipe Exsists",
        })
      );
    } else {
      const newRecipe = new RecipeModel({
        name,
        cover,
        numberOfServing,
        cookingTime,
        ingredients,
        preparationSteps,
        creator: userId,
      });

      let createdRecipe = await newRecipe.save();

      createdRecipe = createdRecipe.toJSON();

      // update user data
      let foundUser = await UserModel.findOne({ _id: userId });
      foundUser = foundUser && foundUser.toJSON();

      let updatedUser = await UserModel.findOneAndUpdate(
        { _id: userId },
        { recipes: [...foundUser.recipes, createdRecipe._id] },
        { new: true }
      );

      return res.status(201).json(
        ResponseGenerator.success({
          code: 201,
          message: "Recipe created",
          result: {
            createdRecipe,
            updatedUserData: {
              _id: updatedUser._id,
              name: updatedUser.name,
              email: updatedUser.email,
              avatar: updatedUser.avatar,
              recipes: updatedUser.recipes,
              favorites: updatedUser.favorites,
              followingCategories: updatedUser.followingCategories,
            },
          },
        })
      );
    }
  } catch (error) {
    console.log({ error });
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        message: "cannot create recipe",
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
      })
    );
  }
};

/**
 * Update Recipe
 */
RecipeController.updateRecipe = async (req, res, next) => {
  const { recipeId } = req.params;

  let updatables = req.body;

  try {
    // manage cover
    let cover = req.file && req.file.path;
    if (cover) updatables = { ...updatables, cover };

    const result = await RecipeModel.findOneAndUpdate(
      { _id: recipeId },
      { ...updatables },
      { new: true }
    );

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "Recipe updated",
        result: {
          _id: result._id,
          name: result.name,
          cover: result.cover,
          numberOfServing: result.numberOfServing,
          cookingTime: result.cookingTime,
          ingredients: result.ingredients,
          preparationSteps: result.preparationSteps,
          favorites: result.favorites,
          shares: result.shares,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "There was a problem in updating recipe",
      })
    );
  }
};

/**
 * Remove recipe
 */
RecipeController.removeRecipe = async (req, res, next) => {
  const { recipeId } = req.params;

  try {
    let result = await RecipeModel.findOneAndRemove({ _id: recipeId });

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "Record removed!",
        result: {
          _id: result._id,
          name: result.name,
          cover: result.cover,
          numberOfServing: result.numberOfServing,
          cookingTime: result.cookingTime,
          ingredients: result.ingredients,
          preparationSteps: result.preparationSteps,
          favorites: result.favorites,
          shares: result.shares,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "Cannot remove recipe from database",
      })
    );
  }
};

/**
 * Favorite reciep
 */
RecipeController.favoriteRecipe = async (req, res, next) => {
  const userId = req.user.user_id;
  const { recipeId } = req.body;

  try {
    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId });

    if (foundedRecipe) {
      let foundUser = await UserModel.findOne({ _id: userId });
      foundUser = foundUser && foundUser.toJSON();

      const foundIndex = foundUser.favorites.findIndex(
        (rcp) => String(rcp) === recipeId
      );

      let newFavorites = [];
      if (foundIndex === -1) {
        newFavorites = [...foundUser.favorites, recipeId];
      } else {
        newFavorites = [
          ...foundUser.favorites.slice(0, foundIndex),
          ...foundUser.favorites.slice(
            foundIndex + 1,
            foundUser.favorites.length - 1
          ),
        ];
      }

      let userData = await UserModel.findOneAndUpdate(
        { _id: userId },
        { favorites: newFavorites },
        { new: true }
      );

      let updatedRecipe = await RecipeModel.findOneAndUpdate(
        { _id: recipeId },
        { $inc: { favorites: foundIndex === -1 ? 1 : -1 } },
        { new: true }
      );

      return res.status(200).json(
        ResponseGenerator.success({
          code: 200,
          message: "Recipe Favorited",
          result: {
            updatedUser: {
              _id: userData._id,
              name: userData.name,
              email: userData.email,
              avatar: userData.avatar,
              recipes: userData.recipes,
              favorites: userData.favorites,
              followingCategories: userData.followingCategories,
            },
            updatedRecipe: {
              _id: updatedRecipe._id,
              name: updatedRecipe.name,
              cover: updatedRecipe.cover,
              numberOfServing: updatedRecipe.numberOfServing,
              cookingTime: updatedRecipe.cookingTime,
              ingredients: updatedRecipe.ingredients,
              preparationSteps: updatedRecipe.preparationSteps,
              favorites: updatedRecipe.favorites,
              shares: updatedRecipe.shares,
            },
          },
        })
      );
    } else {
      return res.status(404).json(
        ResponseGenerator.failure({
          code: 404,
          reason: RequestFailureReasons.BAD_REQUEST,
          message: "cannot found recipe",
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "cannot favorite recipe",
      })
    );
  }
};

/**
 * share reciep
 */
RecipeController.shareRecipe = async (req, res, next) => {
  const userId = req.user.user_id;
  const { recipeId } = req.body;

  try {
    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId });

    if (foundedRecipe) {
      let updatedRecipe = await RecipeModel.findOneAndUpdate(
        { _id: recipeId },
        { $inc: { shares: 1 } },
        { new: true }
      );

      return res.status(200).json(
        ResponseGenerator.success({
          code: 200,
          message: "share OK",
          result: {
            _id: updatedRecipe._id,
            name: updatedRecipe.name,
            cover: updatedRecipe.cover,
            numberOfServing: updatedRecipe.numberOfServing,
            cookingTime: updatedRecipe.cookingTime,
            ingredients: updatedRecipe.ingredients,
            preparationSteps: updatedRecipe.preparationSteps,
            favorites: updatedRecipe.favorites,
            shares: updatedRecipe.shares,
          },
        })
      );
    } else {
      return res.status(404).json(
        ResponseGenerator.failure({
          code: 404,
          reason: RequestFailureReasons.BAD_REQUEST,
          message: "cannot found recipe",
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "cannot favorite recipe",
      })
    );
  }
};

export default RecipeController;
