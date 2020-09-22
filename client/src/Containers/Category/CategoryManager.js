import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import CategorySaga from "./redux/saga";
import CategoryReducer from "./redux/reducer";
import { getCategoryAction, resetCategoryAction } from "./redux/actions";

const CategoryKeyOnRedux = "Category";

const CategoryManager = ({ match }) => {
  useInjectReducer({
    key: CategoryKeyOnRedux,
    reducer: CategoryReducer,
  });
  useInjectSaga({ key: CategoryKeyOnRedux, saga: CategorySaga });

  const { categoryId } = match.params;

  const [getCategory, resetCategory] = useBindDispatch([
    getCategoryAction,
    resetCategoryAction,
  ]);

  const { loading, error, category } = useSelector(
    (state) => state[CategoryKeyOnRedux] || initialState
  );

  useEffect(() => {
    getCategory({ categoryId });

    return () => resetCategory();
  }, []);

  return { data: { loading, error, category, categoryId } };
};

export default CategoryManager;
