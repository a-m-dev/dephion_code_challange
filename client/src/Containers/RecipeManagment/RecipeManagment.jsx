import React from "react";

import { RecipeManagmentWrapper, Heading, Label, FormBody } from "./styles";

const RecipeManagment = () => {
  return (
    <RecipeManagmentWrapper>
      <Heading>
        <Label>Create Recipe</Label>
      </Heading>

      <FormBody>CREATE_EDIT_FORM</FormBody>
    </RecipeManagmentWrapper>
  );
};

export default RecipeManagment;
