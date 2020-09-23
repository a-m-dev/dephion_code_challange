import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "Containers/App/redux/initialState";
import { getUserDataAction } from "Containers/App/redux/actions";

const ProfileManager = () => {
  const [getUserData] = useBindDispatch([getUserDataAction]);

  const { userData } = useSelector((state) => state.GlobalData || initialState);

  useEffect(() => {
    getUserData();
  }, []);

  return {
    data: { userData },
    actions: {},
  };
};

export default ProfileManager;
