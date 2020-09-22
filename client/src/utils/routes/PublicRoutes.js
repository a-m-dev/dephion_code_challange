const PublicRoutes = {
  auth: "/auth",

  home: "/",
  about: "/about",
  categories: "/categories",
  category: (catId) => `/category/${catId}`,

  footer: {
    faq: "/faq",
    support: "/support",
    contact: "/contact",
    guidlines: "/guidlines",
  },
};

export default PublicRoutes;
