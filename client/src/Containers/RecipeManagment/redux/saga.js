import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import {
  CREATE_RECIPE,
  GET_CATEGORIES,
  GET_RECIPE,
  UPDATE_RECIPE_ITEM,
} from "./constants";
import {
  loadingAction,
  errorAction,

  // update recipe
  loadingUpdateRecipeAction,
  errorRecipeUpdateAction,
  updateRecipeItemAction,

  // recipe
  loadingGetRecipeAction,
  errorGetRecipeAction,
  updateRecipeAction,

  // category
  loadingGetCategoryAction,
  errorGetCategoryAction,
  updateCategoriesAction,
} from "./actions";
import { updateUserDataNotAuthIncludedAction } from "Containers/App/redux/actions";
import { PublicRoutes } from "utils/routes";

function* createRecipeWorker({
  payload: {
    name,
    categoryId,
    cookingTime,
    numberOfServing,
    ingredients,
    preparationSteps,
    cover,
  },
}) {
  const url = apiEndpoints.recipe.createRecipe();
  const method = RequestMethods.POST;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: [
      ({ data }) => push(PublicRoutes.recipe(data.createdRecipe._id)),
      ({ code, message, data }) => {
        toast.success(message);
        return updateUserDataNotAuthIncludedAction(data.updatedUser);
      },
    ],
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  const data = new FormData();
  data.append("name", name);
  data.append("categoryId", categoryId);
  data.append("cookingTime", cookingTime);
  data.append("numberOfServing", numberOfServing);

  ingredients.forEach((item) => {
    data.append("ingredients[]", item);
  });

  preparationSteps.forEach((item) => {
    data.append("preparationSteps[]", item);
  });

  data.append("cover", cover);

  yield requestCall({ url, method, actions, data });
}

function* getCategoriesWorket() {
  const url = apiEndpoints.category.getCategories();
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingGetCategoryAction(loadingStatus),
    success: ({ code, message, data }) => updateCategoriesAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorGetCategoryAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

function* getRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.getRecipe(recipeId);
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingGetRecipeAction(loadingStatus),
    success: ({ code, message, data }) => updateRecipeAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorGetRecipeAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

function* updateRecipeItemWorker({
  payload: {
    recipeId,
    name,
    categoryId,
    cookingTime,
    numberOfServing,
    ingredients,
    preparationSteps,
    cover,
  },
}) {
  const url = apiEndpoints.recipe.updateRecipe(recipeId);
  const method = RequestMethods.PATCH;
  const actions = {
    loading: (loadingStatus) => loadingUpdateRecipeAction(loadingStatus),
    success: [
      ({ data }) => push(PublicRoutes.recipe(data._id)),
      ({ code, message, data }) => {
        toast.success(message);
      },
    ],
    failure: (error) => {
      toast.error(error.message);
      return errorRecipeUpdateAction(error);
    },
  };

  const data = new FormData();
  data.append("name", name);
  data.append("cookingTime", cookingTime);
  data.append("numberOfServing", numberOfServing);

  ingredients.forEach((item) => {
    data.append("ingredients[]", item);
  });

  preparationSteps.forEach((item) => {
    data.append("preparationSteps[]", item);
  });

  data.append("cover", cover);

  yield requestCall({ url, method, actions, data });
}

export default function* RecipeManagmentSaga() {
  yield all([
    takeLatest(CREATE_RECIPE, createRecipeWorker),
    takeLatest(GET_CATEGORIES, getCategoriesWorket),
    takeLatest(GET_RECIPE, getRecipeWorker),
    takeLatest(UPDATE_RECIPE_ITEM, updateRecipeItemWorker),
  ]);
}
