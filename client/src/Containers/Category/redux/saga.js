import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { toast } from "react-toastify";

import { GET_CATEGORY, FOLLOW_CATEGORY } from "./constants";
import { loadingAction, errorAction, updateCategoryAction } from "./actions";
import { updateUserDataNotAuthIncludedAction } from "Containers/App/redux/actions";

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

function* followCategoryWorker({ payload: { categoryId } }) {
  const url = apiEndpoints.category.followCategory();
  const method = RequestMethods.PUT;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) =>
      updateUserDataNotAuthIncludedAction(data.userData),
    failure: (error) => {
      toast.error(error.message);
      return errorAction(error);
    },
  };

  const data = {
    categoryId,
  };

  yield requestCall({ url, method, actions, data });
}

export default function* CategorySaga() {
  yield all([
    takeLatest(GET_CATEGORY, getCategory),
    takeLatest(FOLLOW_CATEGORY, followCategoryWorker),
  ]);
}
