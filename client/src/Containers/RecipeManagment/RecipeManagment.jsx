import React from "react";
import { Form, FileUpload, CrudList, Button } from "Components";
import RecipeManagmentManager from "./RecipeManagmentManager";
import {
  RecipeManagmentWrapper,
  Heading,
  Label,
  FormBody,
  SubmittionArea,
  GridSection,
} from "./styles";

const RecipeManagment = (props) => {
  const {
    data: {
      categoryLoading,
      recipe,
      recipeLoading,
      GridSectionInputs,
      isEditMode,
    },
    formProps,
  } = RecipeManagmentManager(props);

  return (
    <RecipeManagmentWrapper>
      <Heading>
        <Label>
          {isEditMode ? `Edit ${recipe.name || ""}` : "Create Recipe"}
        </Label>
      </Heading>

      <FormBody>
        <Form {...formProps}>
          <GridSection>
            {GridSectionInputs.map(({ id, Component, props }) => (
              <Component key={id} {...props} />
            ))}
          </GridSection>

          <FileUpload name="cover" />
          <SubmittionArea>
            <Button
              type="submit"
              label={
                isEditMode ? `Update ${recipe.name || ""}` : "Create Recipe"
              }
              loading={isEditMode ? recipeLoading : categoryLoading}
            />
          </SubmittionArea>
        </Form>
      </FormBody>
    </RecipeManagmentWrapper>
  );
};

export default RecipeManagment;
