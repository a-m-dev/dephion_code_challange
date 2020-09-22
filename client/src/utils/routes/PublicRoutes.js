const PublicRoutes = {
  auth: "/auth",

  home: "/",
  categories: "/categories",
  category: (catId) => `/category/${catId}`,
  recipe: (rcpId) => `/recipe/${rcpId}`,

  footer: {
    faq: "/faq",
    support: "/support",
    contact: "/contact",
    guidlines: "/guidlines",
  },
};

export default PublicRoutes;
