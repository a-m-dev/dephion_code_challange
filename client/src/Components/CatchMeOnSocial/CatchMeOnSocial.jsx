import React, { useMemo } from "react";
import { SocialArea } from "./styles";

const CatchMeOnSocial = () => {
  const socialData = useMemo(() => {
    return [
      {
        id: 1,
        link: "https://stackoverflow.com/users/5354341/a-m-dev",
        icon: "icon-stackoverflow",
      },
      {
        id: 2,
        link: "https://www.linkedin.com/in/ahmad-mirzaei-b60b2618a/",
        icon: "icon-linkedin",
      },
      {
        id: 3,
        link: "https://github.com/a-m-dev",
        icon: "icon-github-circled",
      },
    ];
  }, []);

  return (
    <SocialArea>
      {socialData.map(({ id, link, icon }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer">
          <i className={icon} />
        </a>
      ))}
    </SocialArea>
  );
};

export default CatchMeOnSocial;
