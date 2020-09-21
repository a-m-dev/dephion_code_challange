import {
  ERROR,
  LOADING,

  // auth
  POST_LOGIN,
  POST_REGISTER,
  UPDATE_USER_DATA,
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
export const updateUserDataAction = (payload) => ({
  type: UPDATE_USER_DATA,
  payload,
});
export const resetUserDataAction = () => ({
  type: RESET_USER_DATA,
});
