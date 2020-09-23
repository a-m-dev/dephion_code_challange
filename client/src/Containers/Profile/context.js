import { createContext, useContext } from "react";

export const ProfileContext = createContext();
export const useProfileContext = () => useContext(ProfileContext);
