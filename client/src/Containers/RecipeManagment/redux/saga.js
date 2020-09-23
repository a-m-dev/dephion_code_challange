import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { CREATE_RECIPE, GET_CATEGORIES } from "./constants";
import {
  loadingAction,
  errorAction,

  // category
  loadingGetCategoryAction,
  errorGetCategoryAction,
  updateCategoriesAction,
} from "./actions";
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
        console.log(data);
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

export default function* RecipeManagmentSaga() {
  yield all([
    takeLatest(CREATE_RECIPE, createRecipeWorker),
    takeLatest(GET_CATEGORIES, getCategoriesWorket),
  ]);
}
