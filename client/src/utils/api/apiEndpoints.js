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
    getTopCategories: () => `${baseURL}/category/getTopCategories`,
  },

  // recipe
  recipe: {},
};

export default apiEndpoints;
