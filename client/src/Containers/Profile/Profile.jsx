import React from "react";
import { ProfileContext } from "./context";
import ProfileManager from "./ProfileManager";
import { ProfileWrapper } from "./styles";

import { UserInfo, UserData } from "./components";

const Profile = () => {
  const { data, actions } = ProfileManager();

  return (
    <ProfileContext.Provider value={{ data, actions }}>
      <ProfileWrapper>
        <UserInfo />
        <UserData />
      </ProfileWrapper>
    </ProfileContext.Provider>
  );
};

export default Profile;
