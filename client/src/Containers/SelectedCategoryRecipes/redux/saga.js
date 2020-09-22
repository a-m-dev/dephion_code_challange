import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";

import { GET_RECIPE_LIST_BY_CATEGORY } from "./constants";
import {
  loadingAction,
  errorAction,
  updateRecipeListByCategoryAction,
} from "./actions";

function* getRecipeListByCategoryWorker({ payload: { categoryId } }) {
  const url = apiEndpoints.recipe.getRecipeListByCategory(categoryId);
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) =>
      updateRecipeListByCategoryAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* RecipeListByCategorySaga() {
  yield all([
    takeLatest(GET_RECIPE_LIST_BY_CATEGORY, getRecipeListByCategoryWorker),
  ]);
}
