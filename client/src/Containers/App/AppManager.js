import { useMemo } from "react";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";

import GlobalSaga from "./redux/saga";
import GlobalReducer from "./redux/reducer";

const GlobalDataKetOnRedux = "GlobalData";

const AppManager = ({ location }) => {
  useInjectReducer({ key: GlobalDataKetOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: GlobalDataKetOnRedux, saga: GlobalSaga });

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
