import React from "react";
import DEPHION_LOGO from "Images/dephion_logo.png";
import { HeroWrapper, Logo } from "./styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <Logo src={DEPHION_LOGO} alt="dephion logo" />
    </HeroWrapper>
  );
};

export default Hero;
