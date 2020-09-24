import React from "react";
import SelectedCategoryRecipes from "Containers/SelectedCategoryRecipes";
import { CategoryHero } from "Components";
import CategoryManager from "./CategoryManager";
import { CategoryActions } from "./componetns";

import { CategoryContext } from "./context";

import { CategoryWrapper } from "./styles";

const Category = (props) => {
  const {
    data: { categoryId, category },
    actions,
  } = CategoryManager(props);

  return (
    <CategoryContext.Provider
      value={{ data: { categoryId, category }, actions }}
    >
      <CategoryWrapper>
        <CategoryHero {...category} />
        <CategoryActions />
        <SelectedCategoryRecipes selectedCategory={categoryId} />
      </CategoryWrapper>
    </CategoryContext.Provider>
  );
};

export default Category;
