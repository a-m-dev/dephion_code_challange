import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import CategoriesSaga from "./redux/saga";
import CategoriesReducer from "./redux/reducer";
import { getCategoriesAction } from "./redux/actions";

const CategoriesKeyOnRedux = "Categories";

const CategoriesManager = () => {
  useInjectReducer({
    key: CategoriesKeyOnRedux,
    reducer: CategoriesReducer,
  });
  useInjectSaga({ key: CategoriesKeyOnRedux, saga: CategoriesSaga });

  const [getCategories] = useBindDispatch([getCategoriesAction]);

  const { loading, error, categories } = useSelector(
    (state) => state[CategoriesKeyOnRedux] || initialState
  );

  useEffect(() => {
    getCategories();
  }, []);

  return { data: { loading, error, categories } };
};

export default CategoriesManager;
