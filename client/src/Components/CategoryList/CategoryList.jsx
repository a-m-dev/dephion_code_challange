import React from "react";
import { CategoryCard } from "Components";

import { ListWrapper } from "./styles";

const CategoryList = ({ dataset }) => {
  return (
    <ListWrapper>
      {dataset?.length === 0 && <p>no categories you've following</p>}
      {dataset?.map((cat, i) => (
        <CategoryCard key={i} {...cat} isClickable />
      ))}
    </ListWrapper>
  );
};

export default CategoryList;
