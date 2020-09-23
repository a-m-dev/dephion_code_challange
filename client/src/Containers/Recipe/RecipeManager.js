import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";

import { useGlobalAppContext } from "Containers/App/context";

import { useBindDispatch } from "utils/redux/useBindDispatch";

import initialState from "./redux/initialState";
import initialGlobalData from "Containers/App/redux/initialState";
import RecipeSaga from "./redux/saga";
import RecipeReducer from "./redux/reducer";
import {
  getRecipeAction,
  favoriteRecipeAction,
  shareRecipeAction,
  removeRecipeAction,
} from "./redux/actions";

const RecipeKeyOnRedux = "Recipe";

const RecipeManager = ({ match }) => {
  useInjectReducer({
    key: RecipeKeyOnRedux,
    reducer: RecipeReducer,
  });
  useInjectSaga({ key: RecipeKeyOnRedux, saga: RecipeSaga });

  const {
    data: { isLoggedIn },
  } = useGlobalAppContext();

  const { recipeId } = match.params;

  const [
    getRecipe,
    favoriteRecipe,
    shareRecipe,
    removeRecipe,
  ] = useBindDispatch([
    getRecipeAction,
    favoriteRecipeAction,
    shareRecipeAction,
    removeRecipeAction,
  ]);

  const { loading, error, recipe } = useSelector(
    (state) => state[RecipeKeyOnRedux] || initialState
  );

  const { userData } = useSelector(
    (state) => state.GlobalData || initialGlobalData
  );

  useEffect(() => {
    getRecipe({ recipeId });
  }, [recipeId]);

  const handleFavoriteRecipe = useCallback(() => {
    if (isLoggedIn) {
      favoriteRecipe({ recipeId: recipe._id });
    } else {
      toast.error("You are not logged in!");
    }
  }, [recipe, isLoggedIn]);

  const handleShareRecipe = useCallback(() => {
    shareRecipe({ recipeId: recipe._id });
    const text = `Hi there, I would love to share this recipe with you: ${window.location.href} ,Best!`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  }, [recipe]);

  const handleBookmark = useCallback(() => {
    console.log(
      "the book mark idea, i dont know when it came in my mind, but i need to create the list for bookmarks in backend first ;)"
    );
  }, []);

  const isUserLikedRecipe = useMemo(() => {
    return userData?.favorites?.includes(recipe._id);
  }, [recipe, userData]);

  const isUserOwnsRecipe = useMemo(() => {
    return userData?.recipes?.includes(recipe._id);
  }, [recipe, userData]);

  const recipeActions = useMemo(() => {
    return [
      {
        id: 1,
        type: "item",
        icon: isUserLikedRecipe ? "icon-heart" : "icon-heart-empty",
        handler: handleFavoriteRecipe,
        label: `${recipe?.favorites} likes`,
      },
      {
        id: 2,
        type: "item",
        icon: "icon-share",
        handler: handleShareRecipe,
        label: `${recipe?.shares} shares`,
      },
      { id: 3, type: "misc" },
      {
        id: 4,
        type: "item",
        icon: "icon-bookmark-empty",
        handler: handleBookmark,
        label: "",
      },
    ];
  }, [recipe, handleFavoriteRecipe, handleShareRecipe, isUserLikedRecipe]);

  return {
    data: {
      loading,
      error,
      recipe,
      recipeActions,

      isUserLikedRecipe,
      isUserOwnsRecipe,
    },
    actions: { handleFavoriteRecipe, removeRecipe },
  };
};

export default RecipeManager;
