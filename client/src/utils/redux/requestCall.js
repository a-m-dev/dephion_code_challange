import { apiRequest } from "utils/api";
// import { put } from "redux-saga/effects";
import handleActions from "./handleActions";

function* requestCall({
  url,
  method,
  actions: { loading, success, failure },
  ...options
}) {
  yield handleActions(loading, true);

  try {
    const data = yield apiRequest({ url, method, ...options });
    yield handleActions(success, data);
  } catch (error) {
    const { status, message } = error || {};

    if (status === 401) {
      // TODO:
      // - enque message :: you are unauthorized
      // - call logout action
    }

    // TODO:
    // - enque error with error msg
    // - call fauluer action
    yield handleActions(failure, { status, message });
  } finally {
    yield handleActions(loading, false);
  }

  return false;
}

export default requestCall;
