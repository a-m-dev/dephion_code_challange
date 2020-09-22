import React from "react";
import { Hero } from "./components";

import TopCategories from "Containers/TopCategories";
import SelectedCategoryRecipes from "Containers/SelectedCategoryRecipes";

import HomeManager from "./HomeManager";
import { HomeWrapper } from "./styles";

const Home = () => {
  const { data } = HomeManager();

  return (
    <HomeWrapper>
      <Hero />
      <TopCategories />
      <SelectedCategoryRecipes />
    </HomeWrapper>
  );
};

export default Home;
