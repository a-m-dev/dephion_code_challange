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
    getUserData: () => `${baseURL}/user/getUserData`,
    getUserList: () => `${baseURL}/user/getUserList`,
  },

  // category
  category: {
    getCategory: (catId) => `${baseURL}/category/getCategoryById/${catId}`,
    getCategories: () => `${baseURL}/category/getCategoryList`,
    getTopCategories: () => `${baseURL}/category/getTopCategories`,
    followCategory: () => `${baseURL}/category/followCategory`,
  },

  // recipe
  recipe: {
    getRecipe: (rcpId) => `${baseURL}/recipe/getRecipe/${rcpId}`,
    getRecipeListByCategory: (catId) =>
      `${baseURL}/recipe/getRecipeByCategory/${catId}`,
    favoriteRecipe: () => `${baseURL}/recipe/favoriteRecipe`,
    shareRecipe: () => `${baseURL}/recipe/shareRecipe`,
    removeRecipe: (rcpId) => `${baseURL}/recipe/deleteRecipe/${rcpId}`,

    createRecipe: () => `${baseURL}/recipe/createRecipe`,
    updateRecipe: (rcpId) => `${baseURL}/recipe/updateRecipe/${rcpId}`,
  },
};

export default apiEndpoints;
