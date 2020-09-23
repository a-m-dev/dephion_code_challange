import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import { push } from "connected-react-router";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";

import {
  GET_RECIPE,
  FAVORITE_RECIPE,
  SHARE_RECIPE,
  REMOVE_RECIPE,
} from "./constants";
import { loadingAction, errorAction, updateRecipeAction } from "./actions";
import { updateUserDataNotAuthIncludedAction } from "Containers/App/redux/actions";
import { PublicRoutes } from "utils/routes";

function* getRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.getRecipe(recipeId);
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateRecipeAction(data),
    failure: [
      () => push(PublicRoutes.categories),
      (error) => {
        toast.error(error.message);
        return errorAction(error);
      },
    ],
  };

  yield requestCall({ url, method, actions });
}

function* favoriteRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.favoriteRecipe();
  const method = RequestMethods.PUT;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: [
      ({ code, message, data }) =>
        updateUserDataNotAuthIncludedAction(data.updatedUser),
      ({ code, message, data }) => updateRecipeAction(data.updatedRecipe),
    ],
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  const data = { recipeId };

  yield requestCall({ url, method, actions, data });
}

function* shareRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.shareRecipe();
  const method = RequestMethods.PUT;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateRecipeAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  const data = { recipeId };

  yield requestCall({ url, method, actions, data });
}

function* removeRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.removeRecipe(recipeId);
  const method = RequestMethods.DELETE;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: [
      () => push(PublicRoutes.categories),
      ({ code, message, data }) =>
        updateUserDataNotAuthIncludedAction(data.updatedUser),
    ],
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* TopCategoriesSaga() {
  yield all([
    takeLatest(GET_RECIPE, getRecipeWorker),
    takeLatest(FAVORITE_RECIPE, favoriteRecipeWorker),
    takeLatest(SHARE_RECIPE, shareRecipeWorker),
    takeLatest(REMOVE_RECIPE, removeRecipeWorker),
  ]);
}
