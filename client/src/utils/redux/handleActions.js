import { all, put } from "redux-saga/effects";

const waistedAction = (payload) => ({
  type: "WAISTED_ACTION_TYPE",
  payload,
});

function* handleActions(actions = waistedAction, payload = []) {
  const functions = Array.isArray(actions) ? actions : [actions];
  yield all(functions.map((action) => put(action(payload) || waistedAction())));
}

export default handleActions;
