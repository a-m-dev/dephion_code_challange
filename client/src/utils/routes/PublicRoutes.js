const PublicRoutes = {
  auth: "/auth",

  home: "/",
  categories: "/categories",
  category: (catId) => `/category/${catId}`,

  recipe: (rcpId) => `/recipe/${rcpId}`,
  editRecipe: (rcpId) => `/recipe/${rcpId}/edit`,

  footer: {
    faq: "/faq",
    support: "/support",
    contact: "/contact",
    guidlines: "/guidlines",
  },
};

export default PublicRoutes;
