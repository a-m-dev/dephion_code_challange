import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";

import { GET_RECIPE, FAVORITE_RECIPE } from "./constants";
import { loadingAction, errorAction, updateRecipeAction } from "./actions";
import { updateUserDataNotAuthIncludedAction } from "Containers/App/redux/actions";

function* getRecipeWorker({ payload: { recipeId } }) {
  const url = apiEndpoints.recipe.getRecipe(recipeId);
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateRecipeAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

function* favoriteRecipeWorker({ payload: { recipeId } }) {
  console.log({ recipeId });
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

export default function* TopCategoriesSaga() {
  yield all([
    takeLatest(GET_RECIPE, getRecipeWorker),
    takeLatest(FAVORITE_RECIPE, favoriteRecipeWorker),
  ]);
}
