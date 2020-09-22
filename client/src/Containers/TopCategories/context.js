import { createContext, useContext } from "react";

export const TopCategoriesContext = createContext();
export const useTopCategoriesContext = () => useContext(TopCategoriesContext);
