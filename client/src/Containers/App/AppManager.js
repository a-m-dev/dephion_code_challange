import { useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import GlobalSaga from "./redux/saga";
import GlobalReducer from "./redux/reducer";
import initialState from "./redux/initialState";

import { resetUserDataAction } from "./redux/actions";

const GlobalDataKeyOnRedux = "GlobalData";

const AppManager = ({ location }) => {
  useInjectReducer({ key: GlobalDataKeyOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: GlobalDataKeyOnRedux, saga: GlobalSaga });

  const [resetUserData] = useBindDispatch([resetUserDataAction]);

  const { userData, authData } = useSelector(
    (state) => state.GlobalData || initialState
  );

  const {
    location: { pathname },
  } = useSelector((state) => state.router);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isLoggedIn = useMemo(() => {
    return authData && authData.token;
  }, [authData]);

  const isFullScreenMode = useMemo(() => {
    const { pathname } = location;
    const fullScreenBlackList = ["/auth"];

    if (fullScreenBlackList.includes(pathname)) return true;
    else return false;
  }, [location]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authToken");
    resetUserData();
  }, [resetUserData]);

  return {
    data: {
      isLoggedIn,
      isFullScreenMode,

      userData,
      authData,
    },
    actions: { handleLogout },
  };
};

export default AppManager;
