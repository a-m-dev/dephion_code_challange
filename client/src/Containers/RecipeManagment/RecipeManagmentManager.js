import { useCallback, useEffect, useMemo } from "react";
import { InputField, OptionField, CrudList } from "Components";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import RecipeManagmentSaga from "./redux/saga";
import RecipeManagmentReducer from "./redux/reducer";
import {
  createCategoryAction,
  getCategoriesAction,
  getRecipeAction,
  resetRecipeAction,
  updateRecipeItemAction,
} from "./redux/actions";

import { initialValues, validationSchema } from "./form";
import { RouterRoutes } from "utils/routes";

const RecipeManagmentKeyOnRedux = "RecipeManagment";

const RecipeManagmentManager = ({ match }) => {
  useInjectReducer({
    key: RecipeManagmentKeyOnRedux,
    reducer: RecipeManagmentReducer,
  });
  useInjectSaga({ key: RecipeManagmentKeyOnRedux, saga: RecipeManagmentSaga });

  const { recipeId } = match.params;

  const [
    createCategory,
    getCategories,
    getRecipe,
    resetRecipe,
    updateRecipeItem,
  ] = useBindDispatch([
    createCategoryAction,
    getCategoriesAction,
    getRecipeAction,
    resetRecipeAction,
    updateRecipeItemAction,
  ]);

  const {
    categoryLoading,
    categoryError,
    recipeLoading,
    recipe = {},
    categories = [],
  } = useSelector((state) => state[RecipeManagmentKeyOnRedux] || initialState);

  const isEditMode = useMemo(() => {
    const { path } = match;
    return path === RouterRoutes.editRecipe;
  }, []);

  useEffect(() => {
    return () => resetRecipe();
  }, []);

  useEffect(() => {
    getCategories();
    if (isEditMode) {
      getRecipe({ recipeId });
    }
  }, [isEditMode, recipeId]);

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
          label: "Category, can't change in editmode! not in this version :)",
          dataset: categories,
          icon: "icon-tags",
          disabled: isEditMode,
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
          dataset: isEditMode ? recipe?.ingredients || [] : [],
          isEditMode: true,
        },
      },
      {
        id: 6,
        Component: CrudList,
        props: {
          name: "preparationSteps",
          label: "How to Prepare",
          dataset: isEditMode ? recipe?.preparationSteps || [] : [],
          isEditMode: true,
        },
      },
    ];
  }, [categories, recipe, isEditMode]);

  const refineRecipeAsInitialValue = useMemo(() => {
    return {
      name: recipe.name,
      categoryId: recipe?.category?._id,
      cookingTime: recipe.cookingTime,
      numberOfServing: recipe.numberOfServing,
      ingredients: recipe.ingredients,
      preparationSteps: recipe.preparationSteps,
    };
  }, [recipe]);

  const handleFormSubmit = useCallback(
    (args) => {
      if (isEditMode) updateRecipeItem({ ...recipe, ...args, recipeId });
      else createCategory({ ...args });
    },
    [isEditMode, recipe, recipeId]
  );

  return {
    data: {
      categoryLoading,
      recipe,
      recipeLoading,
      GridSectionInputs,
      isEditMode,
    },
    formProps: {
      initialValues: isEditMode ? refineRecipeAsInitialValue : initialValues,
      validationSchema,
      enableReinitialize: true,
      onSubmit: handleFormSubmit,
    },
  };
};

export default RecipeManagmentManager;
