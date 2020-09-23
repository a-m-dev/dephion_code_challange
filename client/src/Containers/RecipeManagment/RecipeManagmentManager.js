import { useCallback, useEffect, useMemo } from "react";
import { InputField, OptionField, CrudList } from "Components";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import RecipeManagmentSaga from "./redux/saga";
import RecipeManagmentReducer from "./redux/reducer";
import { createCategoryAction, getCategoriesAction } from "./redux/actions";

import { initialValues, validationSchema } from "./form";

const RecipeManagmentKeyOnRedux = "RecipeManagment";

const RecipeManagmentManager = () => {
  useInjectReducer({
    key: RecipeManagmentKeyOnRedux,
    reducer: RecipeManagmentReducer,
  });
  useInjectSaga({ key: RecipeManagmentKeyOnRedux, saga: RecipeManagmentSaga });

  const [createCategory, getCategories] = useBindDispatch([
    createCategoryAction,
    getCategoriesAction,
  ]);

  const { categoryLoading, categoryError, categories } = useSelector(
    (state) => state[RecipeManagmentKeyOnRedux] || initialState
  );

  useEffect(() => {
    getCategories();
  }, []);

  const GridSectionInputs = useMemo(() => {
    return [
      {
        id: 1,
        Component: InputField,
        props: {
          type: "text",
          name: "name",
          label: "Name",
          placeholder: "name...",
          autoComplete: "off",
          icon: "icon-pencil",
        },
      },
      {
        id: 2,
        Component: OptionField,
        props: {
          name: "categoryId",
          label: "Category",
          dataset: categories,
          icon: "icon-tags",
        },
      },
      {
        id: 3,
        Component: InputField,
        props: {
          type: "number",
          name: "cookingTime",
          label: "Time it takes",
          placeholder: "Cooking time",
          autoComplete: "off",
          icon: "icon-clock",
        },
      },
      {
        id: 4,
        Component: InputField,
        props: {
          type: "number",
          name: "numberOfServing",
          label: "Num of serving",
          placeholder: "Number of Serving",
          autoComplete: "off",
          icon: "icon-group",
        },
      },
      {
        id: 5,
        Component: CrudList,
        props: {
          name: "ingredients",
          label: "Ingredients",
          dataset: [],
          isEditMode: true,
        },
      },
      {
        id: 6,
        Component: CrudList,
        props: {
          name: "preparationSteps",
          label: "How to Prepare",
          dataset: [],
          isEditMode: true,
        },
      },
    ];
  }, [categories]);

  const handleFormSubmit = useCallback((args) => {
    console.log("FORM SUBMITTED", args);
    createCategory({ ...args });
  }, []);

  return {
    data: { categoryLoading, GridSectionInputs },
    formProps: {
      initialValues,
      validationSchema,
      onSubmit: handleFormSubmit,
    },
  };
};

export default RecipeManagmentManager;
