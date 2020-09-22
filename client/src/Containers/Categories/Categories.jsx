import React from "react";
import { CategoryCard } from "Components";
import CategoriesManager from "./CategoriesManager";

import {
  CategoriesWrapper,
  Heading,
  Label,
  Count,
  CategoryListWrapper,
} from "./styles";

const Categories = () => {
  const {
    data: { error, loading, categories },
  } = CategoriesManager();

  return (
    <CategoriesWrapper>
      <Heading>
        <Label>Categories</Label>
        {categories.length > 0 && <Count>{categories.length} items</Count>}
      </Heading>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <CategoryListWrapper>
          {categories.map((category) => (
            <CategoryCard key={category._id} {...category} isClickable />
          ))}
        </CategoryListWrapper>
      )}
    </CategoriesWrapper>
  );
};

export default Categories;
