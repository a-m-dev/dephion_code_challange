import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { PublicRoutes } from "utils/routes";

import { POST_LOGIN } from "./constants";
import { loadingAction } from "Containers/App/redux/actions";

function* postLoginWorker({
  payload: { name, email, password, repeatPassword },
}) {
  const url = apiEndpoints.auth.register();
  const method = RequestMethods.POST;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: (data) => {
      toast.success(data.message);
      return push(`${PublicRoutes.auth}?type=login`);
    },
    failure: (error) => {
      toast.error(error.message);
    },
  };

  const data = {
    name,
    email,
    password,
    repeatPassword,
  };

  yield requestCall({ url, method, actions, data });
}

export default function* GlobalSaga() {
  yield all([takeLatest(POST_LOGIN, postLoginWorker)]);
}
