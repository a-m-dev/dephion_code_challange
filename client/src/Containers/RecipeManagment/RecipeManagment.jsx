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

const RecipeManagment = () => {
  const {
    data: { categoryLoading, GridSectionInputs },
    formProps,
  } = RecipeManagmentManager();

  return (
    <RecipeManagmentWrapper>
      <Heading>
        <Label>Create Recipe</Label>
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
              label="Create Recipe"
              loading={categoryLoading}
            />
          </SubmittionArea>
        </Form>
      </FormBody>
    </RecipeManagmentWrapper>
  );
};

export default RecipeManagment;
