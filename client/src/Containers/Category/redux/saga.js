import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";

import { GET_CATEGORY } from "./constants";
import { loadingAction, errorAction, updateCategoryAction } from "./actions";

function* getCategory({ payload: { categoryId } }) {
  const url = apiEndpoints.category.getCategory(categoryId);
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => updateCategoryAction(data),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* CategorySaga() {
  yield all([takeLatest(GET_CATEGORY, getCategory)]);
}
