import NOT_FOUND_CAT from "Images/404.png";
const baseUrl = "http://localhost:4010";

export const getImage = (uri) => {
  return uri ? `${baseUrl}/${uri}` : NOT_FOUND_CAT;
};
