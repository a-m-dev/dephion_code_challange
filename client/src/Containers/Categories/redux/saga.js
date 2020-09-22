import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { GET_CATEGORIES } from "./constants";
import { loadingAction, errorAction, updateCategoriesAction } from "./actions";

function* getCategoriesWorker() {
  const url = apiEndpoints.category.getCategories();
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateCategoriesAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* CategoriesSaga() {
  yield all([takeLatest(GET_CATEGORIES, getCategoriesWorker)]);
}
