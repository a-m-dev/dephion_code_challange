import { useMemo } from "react";
import { useDispatch } from "react-redux";

export const useBindDispatch = (actions = []) => {
  const dispatch = useDispatch();
  const actionList = Array.isArray(actions) ? actions : [actions];
  return useMemo(() => actionList.map(temp.bind(null, dispatch)), [
    actionList,
    dispatch,
  ]);
};

const temp = (dispatch, action) => (...args) => dispatch(action(...args));
