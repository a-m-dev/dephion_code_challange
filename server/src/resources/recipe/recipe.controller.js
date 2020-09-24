import {
  Model as RecipeModel,
  propGeneral as recipePropGeneral,
} from "./recipe.model";
import {
  Model as CategoryModel,
  propGeneral as categoryPropGeneral,
} from "../category/category.model";
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
    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId })
      .populate("creator", userPropMini)
      .populate("category", categoryPropGeneral)
      .exec();

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
          category: foundedRecipe.category,
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
      .populate("category", categoryPropGeneral)
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
              category: result.category,
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
 * Get Recipe by Category
 */
RecipeController.getRecipeByCategory = async (req, res, next) => {
  const { categoryId } = req.params;

  try {
    let foundedCategory = await CategoryModel.findOne({ _id: categoryId });

    foundedCategory = foundedCategory && foundedCategory.toJSON();

    if (!foundedCategory) {
      return res.status(404).json(
        ResponseGenerator.failure({
          code: 404,
          reason: RequestFailureReasons.BAD_REQUEST,
          message: "Category not found",
        })
      );
    } else {
      let foundedRecipes = await RecipeModel.find({
        category: foundedCategory._id,
      })
        .populate("creator", userPropMini)
        .populate("category", categoryPropGeneral);

      return res.status(200).json(
        ResponseGenerator.success({
          code: 200,
          message: `Recipes for category: ${foundedCategory.name}`,
          result: {
            recipeCount: foundedRecipes.length,
            recipes: foundedRecipes.map((recipe) => {
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
                category: result.category,
              };
            }),
          },
        })
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(
      ResponseGenerator.failure({
        code: 500,
        reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        message: "Cannot find recipes",
      })
    );
  }

  return res.status(200).json(
    ResponseGenerator.success({
      code: 200,
      message: "OK",
      reason: { categoryId },
    })
  );
};

/**
 * Create Recipe
 */
RecipeController.createRecipe = async (req, res, next) => {
  const userId = req.user.user_id;
  const {
    name,
    categoryId,
    numberOfServing,
    cookingTime,
    ingredients,
    preparationSteps,
  } = req.body;
  const cover = (req.file && req.file.path) || undefined;

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
    // check if category exists
    let foundedCategory = await CategoryModel.findOne({ _id: categoryId });
    foundedCategory = foundedCategory && foundedCategory.toJSON();

    if (!foundedCategory) {
      return res.status(400).json(
        ResponseGenerator.failure({
          code: 400,
          reason: RequestFailureReasons.BAD_REQUEST,
          message: "Category not found!",
        })
      );
    }

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
        category: categoryId,
        numberOfServing,
        cookingTime,
        ingredients,
        preparationSteps,
        creator: userId,
      });

      let createdRecipe = await newRecipe
        .save()
        .then((rcp) =>
          rcp.populate("category", categoryPropGeneral).execPopulate()
        );

      createdRecipe = createdRecipe.toJSON();

      // update user data
      let foundUser = await UserModel.findOne({ _id: userId });
      foundUser = foundUser && foundUser.toJSON();

      let updatedUser = await UserModel.findOneAndUpdate(
        { _id: userId },
        { recipes: [...foundUser.recipes, createdRecipe._id] },
        { new: true }
      ).exec();

      // update category data
      let foundedCategory = await CategoryModel.findOne({ _id: categoryId });
      foundedCategory = foundedCategory && foundedCategory.toJSON();

      let updatedCategory = await CategoryModel.findOneAndUpdate(
        { _id: categoryId },
        { $inc: { recipesCount: 1 } },
        { new: true }
      ).exec();

      return res.status(201).json(
        ResponseGenerator.success({
          code: 201,
          message: "Recipe created",
          result: {
            createdRecipe,
          },
        })
      );
    }
  } catch (error) {
    console.log(error);
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
    )
      .populate("category", categoryPropGeneral)
      .exec();

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
          category: result.category,
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
  const userId = req.user.user_id;
  const { recipeId } = req.params;

  // TODO
  //  - remove from user recipes list
  //  - decrement category recipes
  //  - remove recipe

  try {
    let foundedUser = await UserModel.findOne({ _id: userId });
    foundedUser = foundedUser && foundedUser.toJSON();

    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId });
    foundedRecipe = foundedRecipe && foundedRecipe.toJSON();

    if (!foundedRecipe) {
      return res.status(404).json(
        ResponseGenerator.failure({
          code: 404,
          message: "Recipe not found",
          reason: RequestFailureReasons.INTERNAL_SERVER_ERROR,
        })
      );
    }

    const foundIndex = foundedUser.recipes.findIndex(
      (rcp) => String(rcp) === recipeId
    );

    if (foundIndex === -1) {
      return res.status(400).json(
        ResponseGenerator.failure({
          code: 400,
          message: "User has not own the Recipe!",
          reason: RequestFailureReasons.BAD_REQUEST,
        })
      );
    }

    // check if user liked recipe before
    const foundLikedRecipeIndex = foundedUser.favorites.findIndex(
      (idx) => String(idx) === recipeId
    );

    if (foundLikedRecipeIndex !== -1) {
      const newFavoriteArr = [
        ...foundedUser.favorites.slice(0, foundLikedRecipeIndex),
        ...foundedUser.favorites.slice(
          foundLikedRecipeIndex + 1,
          foundedUser.favorites.length
        ),
      ];

      let updateUser = await UserModel.findOneAndUpdate(
        { _id: userId },
        { favorites: newFavoriteArr },
        { new: true }
      );
    }

    // remove from user recipes
    const newRecipesArr = [
      ...foundedUser.recipes.slice(0, foundIndex),
      ...foundedUser.recipes.slice(foundIndex + 1, foundedUser.recipes.length),
    ];

    let updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { recipes: newRecipesArr },
      { new: true }
    );

    // decrement category recipes count
    let updatedCategory = await CategoryModel.findOneAndUpdate(
      { _id: foundedRecipe.category },
      { $inc: { recipesCount: -1 } },
      { new: true }
    );

    let result = await RecipeModel.findOneAndRemove({ _id: recipeId });

    return res.status(200).json(
      ResponseGenerator.success({
        code: 200,
        message: "Record removed!",
        result: {
          updatedUser: {
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            avatar: updatedUser.avatar,
            recipes: updatedUser.recipes,
            favorites: updatedUser.favorites,
            followingCategories: updatedUser.followingCategories,
          },
          updatedCategory,
          recipe: {
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
            category: result.category,
          },
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
            foundUser.favorites.length
          ),
        ];
      }

      let userData = await UserModel.findOneAndUpdate(
        { _id: userId },
        { favorites: newFavorites },
        { new: true }
      )
        .populate("recipes", recipePropGeneral)
        .populate("favorites", recipePropGeneral)
        .exec();

      let updatedRecipe = await RecipeModel.findOneAndUpdate(
        { _id: recipeId },
        { $inc: { favorites: foundIndex === -1 ? 1 : -1 } },
        { new: true }
      )
        .populate("category", categoryPropGeneral)
        .populate("creator", userPropMini)
        .exec();

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
              category: updatedRecipe.category,
              creator: updatedRecipe.creator,
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
  const { recipeId } = req.body;

  try {
    let foundedRecipe = await RecipeModel.findOne({ _id: recipeId });

    if (foundedRecipe) {
      let updatedRecipe = await RecipeModel.findOneAndUpdate(
        { _id: recipeId },
        { $inc: { shares: 1 } },
        { new: true }
      )
        .populate("category", categoryPropGeneral)
        .populate("creator", userPropMini)
        .exec();

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
            category: updatedRecipe.category,
            creator: updatedRecipe.creator,
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
