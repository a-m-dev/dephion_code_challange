// import { toUrlParams } from "./toUrlParams";

export const baseURL = "http://localhost:4010/api/v1.0";

const apiEndpoints = {
  // auth
  auth: {
    login: () => `${baseURL}/user/login`,
    register: () => `${baseURL}/user/register`,
  },

  // user
  user: {
    getUserList: () => `${baseURL}/user/getUserList`,
  },

  // category
  category: {
    getCategory: (catId) => `${baseURL}/category/getCategoryById/${catId}`,
    getCategories: () => `${baseURL}/category/getCategoryList`,
    getTopCategories: () => `${baseURL}/category/getTopCategories`,
  },

  // recipe
  recipe: {
    getRecipeListByCategory: (catId) =>
      `${baseURL}/recipe/getRecipeByCategory/${catId}`,
  },
};

export default apiEndpoints;
