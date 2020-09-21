import { ERROR, LOADING, GET_ITEM, UPDATE_ITEM, RESET_ITEM } from "./constants";

export function loadingTestAction(loadingStatus) {
  return {
    type: LOADING,
    payload: { loadingStatus },
  };
}

export function errorTestAction(error) {
  return {
    type: ERROR,
    payload: { error },
  };
}

export function getItemTestAction(payload) {
  return {
    type: GET_ITEM,
    payload,
  };
}

export function updateItemTestAction(data) {
  return {
    type: UPDATE_ITEM,
    payload: data,
  };
}

export function resetItemTestAction() {
  return {
    type: RESET_ITEM,
  };
}
