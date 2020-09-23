import { createContext, useContext } from "react";

export const CrudListContext = createContext();
export const useCrudListContext = () => useContext(CrudListContext);
