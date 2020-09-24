const RouterRoutes = {
  home: "/",
  categories: "/categories",
  category: "/category/:categoryId",

  recipe: "/recipe/:recipeId",
  createRecipe: "/create/recipe",
  editRecipe: "/recipe/:recipeId/edit",

  authentication: "/auth",

  profile: "/profile",

  notFound: "*",
};

export default RouterRoutes;
