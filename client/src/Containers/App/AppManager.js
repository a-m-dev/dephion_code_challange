import { useEffect, useMemo } from "react";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import { useBindDispatch } from "utils/redux/useBindDispatch";

import GlobalSaga from "./redux/saga";
import GlobalReducer from "./redux/reducer";

import { getItemTestAction } from "./redux/actions";

const GlobalDataKetOnRedux = "GlobalData";

const AppManager = ({ location }) => {
  useInjectReducer({ key: GlobalDataKetOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: GlobalDataKetOnRedux, saga: GlobalSaga });

  const [getTestItem] = useBindDispatch([getItemTestAction]);

  useEffect(() => {
    getTestItem({ x: "xxxx", y: "yyyy" });
  }, [getTestItem]);

  const isFullScreenMode = useMemo(() => {
    const { pathname } = location;
    const fullScreenBlackList = ["/auth"];

    if (fullScreenBlackList.includes(pathname)) return true;
    else return false;
  }, [location]);

  return {
    data: {
      isFullScreenMode,
    },
  };
};

export default AppManager;
