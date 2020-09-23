import {
  ERROR,
  LOADING,

  // auth
  POST_LOGIN,
  POST_REGISTER,

  // User
  GET_USER_DATA,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_NOT_AUTH_INCLUDED,
  RESET_USER_DATA,
} from "./constants";

export const loadingAction = (loadingStatus) => ({
  type: LOADING,
  payload: { loadingStatus },
});

export const errorAction = (error) => ({
  type: ERROR,
  payload: { error },
});

// Auth
export const loginAction = (payload) => ({ type: POST_LOGIN, payload });
export const registerAction = (payload) => ({ type: POST_REGISTER, payload });

// User
export const getUserDataAction = () => ({
  type: GET_USER_DATA,
});

export const updateUserDataAction = (payload) => ({
  type: UPDATE_USER_DATA,
  payload,
});
export const updateUserDataNotAuthIncludedAction = (payload) => ({
  type: UPDATE_USER_DATA_NOT_AUTH_INCLUDED,
  payload,
});
export const resetUserDataAction = () => ({
  type: RESET_USER_DATA,
});
