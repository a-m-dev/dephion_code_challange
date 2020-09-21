import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";

import { GET_ITEM } from "./constants";
import {
  loadingTestAction,
  errorTestAction,
  updateItemTestAction,
} from "./actions";

function* getItemWorker({ payload: { x, y } }) {
  console.log("SAGA PAYLOAD", x, y);

  const url = apiEndpoints.user.getUserList();
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingTestAction(loadingStatus),
    success: (data) => updateItemTestAction(data),
    failure: (error) => errorTestAction(error),
  };

  yield requestCall({ url, method, actions });
}

export default function* GlobalSaga() {
  yield all([takeLatest(GET_ITEM, getItemWorker)]);
}
