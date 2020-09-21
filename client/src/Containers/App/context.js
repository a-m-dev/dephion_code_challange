import { createContext, useContext } from "react";

export const GlobalAppContext = createContext();
export const useGlobalAppContext = () => useContext(GlobalAppContext);
