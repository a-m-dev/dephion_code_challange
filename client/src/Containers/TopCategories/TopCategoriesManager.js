import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import TopCategoriesSaga from "./redux/saga";
import TopCategoriesReducer from "./redux/reducer";
import { getTopCategoriesAction } from "./redux/actions";

const TopCategoriesKeyOnRedux = "TopCategories";

const TopCategoriesManager = ({ handleSelectedCategory }) => {
  useInjectReducer({
    key: TopCategoriesKeyOnRedux,
    reducer: TopCategoriesReducer,
  });
  useInjectSaga({ key: TopCategoriesKeyOnRedux, saga: TopCategoriesSaga });

  const [getTopCategories] = useBindDispatch([getTopCategoriesAction]);

  const { loading, error, categories } = useSelector(
    (state) => state[TopCategoriesKeyOnRedux] || initialState
  );

  useEffect(() => {
    getTopCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      handleSelectedCategory(categories[0]._id);
    }
  }, [categories]);

  const swiperConfig = useMemo(() => {
    return {
      slidesPerView: 3,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        125: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
  }, []);

  return {
    data: { loading, error, categories, swiperConfig },
  };
};

export default TopCategoriesManager;
