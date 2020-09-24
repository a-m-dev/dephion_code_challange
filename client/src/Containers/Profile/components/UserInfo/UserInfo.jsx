import React, { useMemo } from "react";
import { useProfileContext } from "Containers/Profile/context";
import { getImage } from "utils/getImage";

import {
  UserInfoWrapper,
  AvatarSection,
  Avatar,
  DetailSection,
  Name,
  Email,
  Misc,
  SectionWrapper,
} from "./styles";

const UserInfo = () => {
  const {
    data: { userData },
  } = useProfileContext();

  const miscData = useMemo(() => {
    return [
      {
        id: 1,
        icon: "icon-heart",
        label: `${userData?.favorites?.length} favorites`,
      },
      {
        id: 2,
        icon: "icon-newspaper",
        label: `${userData?.recipes?.length} recipes`,
      },
      {
        id: 3,
        icon: "icon-tags",
        label: `${userData?.followingCategories?.length} Categories`,
      },
    ];
  }, [userData]);

  return (
    <UserInfoWrapper>
      <AvatarSection>
        <Avatar src={getImage(userData?.avatar)} />
      </AvatarSection>
      <DetailSection>
        <Name>{userData?.name}</Name>
        <Email>{userData?.email}</Email>

        <Misc>
          {miscData.map(({ id, icon, label }) => (
            <SectionWrapper key={id}>
              <i className={icon} />
              <span>{label}</span>
            </SectionWrapper>
          ))}
        </Misc>
      </DetailSection>
    </UserInfoWrapper>
  );
};

export default UserInfo;
