import React from "react";
import SelectedCategoryRecipes from "Containers/SelectedCategoryRecipes";
import { CategoryHero } from "Components";
import CategoryManager from "./CategoryManager";

import { CategoryWrapper } from "./styles";

const Category = (props) => {
  const {
    data: { categoryId, category },
  } = CategoryManager(props);

  return (
    <CategoryWrapper>
      <CategoryHero {...category} />
      <SelectedCategoryRecipes selectedCategory={categoryId} />
    </CategoryWrapper>
  );
};

export default Category;
