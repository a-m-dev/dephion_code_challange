import React from "react";
import { RecipeCard } from "Components";

import { ListWrapper } from "./styles";

const RecipeList = ({ dataset }) => {
  return (
    <ListWrapper>
      {dataset?.length === 0 && <span>there is no record here</span>}
      {dataset?.map((rcp, i) => (
        <RecipeCard key={i} {...rcp} />
      ))}
    </ListWrapper>
  );
};

export default RecipeList;
