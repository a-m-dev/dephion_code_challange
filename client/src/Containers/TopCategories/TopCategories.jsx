import React from "react";
import Swiper from "react-id-swiper";
import { PublicRoutes } from "utils/routes";
import TopCategoriesManager from "./TopCategoriesManager";
import { CategoryCard } from "Components";

import {
  TopCategoriesWrapper,
  Heading,
  Label,
  More,
  Categories,
  CategoryCardItemHolder,
} from "./styles";

const TopCategories = () => {
  const {
    data: { loading, error, categories, swiperConfig },
  } = TopCategoriesManager();

  return (
    <TopCategoriesWrapper>
      <Heading>
        <Label>Top Categories</Label>
        <More to={PublicRoutes.categories}>more...</More>
      </Heading>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <Categories>
          <Swiper {...swiperConfig}>
            {categories &&
              categories.map((category) => {
                return (
                  <CategoryCardItemHolder>
                    <CategoryCard {...category} />
                  </CategoryCardItemHolder>
                );
              })}
          </Swiper>
        </Categories>
      )}
    </TopCategoriesWrapper>
  );
};

export default TopCategories;
