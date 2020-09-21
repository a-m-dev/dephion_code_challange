import { useEffect } from "react";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import { useBindDispatch } from "utils/redux/useBindDispatch";

import GlobalSaga from "./redux/saga";
import GlobalReducer from "./redux/reducer";

import { getItemTestAction } from "./redux/actions";

const GlobalDataKetOnRedux = "GlobalData";

const AppManager = () => {
  useInjectReducer({ key: GlobalDataKetOnRedux, reducer: GlobalReducer });
  useInjectSaga({ key: GlobalDataKetOnRedux, saga: GlobalSaga });

  const [getTestItem] = useBindDispatch([getItemTestAction]);

  useEffect(() => {
    console.log("MOUNT");
    getTestItem({ x: "xxxx", y: "yyyy" });
  }, [getTestItem]);

  return {
    one: "this is one data",
  };
};

export default AppManager;
