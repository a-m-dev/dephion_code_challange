import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { GET_TOP_CATEGORIES } from "./constants";
import {
  loadingAction,
  errorAction,
  updateTopCategoriesAction,
} from "./actions";

function* getTopCategoriesWorker() {
  const url = apiEndpoints.category.getTopCategories();
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateTopCategoriesAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* TopCategoriesSaga() {
  yield all([takeLatest(GET_TOP_CATEGORIES, getTopCategoriesWorker)]);
}
