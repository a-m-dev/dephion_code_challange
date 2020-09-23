import { all, takeLatest } from "redux-saga/effects";
import requestCall from "utils/redux/requestCall";
import apiEndpoints from "utils/api/apiEndpoints";
import { RequestMethods } from "Constants";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { PublicRoutes } from "utils/routes";

import { POST_REGISTER, POST_LOGIN, GET_USER_DATA } from "./constants";
import {
  loadingAction,
  updateUserDataAction,
  updateUserDataNotAuthIncludedAction,
} from "Containers/App/redux/actions";

function* postRegisterWorker({
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

function* postLoginWorker({ payload: { email, password } }) {
  const url = apiEndpoints.auth.login();
  const method = RequestMethods.POST;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: [
      () => push(PublicRoutes.home),
      ({ code, message, data }) => {
        localStorage.setItem("authToken", data.token);
        return updateUserDataAction(data);
      },
    ],
    failure: (error) => {
      toast.error(error.message);
    },
  };

  const data = {
    email,
    password,
  };

  yield requestCall({ url, method, actions, data });
}

function* getUserDataWorker() {
  console.log(">>>> SAGA");
  const url = apiEndpoints.user.getUserData();
  const method = RequestMethods.GET;
  const actions = {
    loading: (loadingStatus) => loadingAction(loadingStatus),
    success: ({ code, message, data }) => {
      return updateUserDataNotAuthIncludedAction(data);
    },
    failure: (error) => {
      toast.error(error.message);
    },
  };

  yield requestCall({ url, method, actions });
}

export default function* GlobalSaga() {
  yield all([
    takeLatest(POST_REGISTER, postRegisterWorker),
    takeLatest(POST_LOGIN, postLoginWorker),
    takeLatest(GET_USER_DATA, getUserDataWorker),
  ]);
}
