import React from "react";
import { Hero } from "./components";

import TopCategories from "Containers/TopCategories";
import SelectedCategoryRecipes from "Containers/SelectedCategoryRecipes";

import HomeManager from "./HomeManager";
import { HomeWrapper } from "./styles";

const Home = () => {
  const {
    data: { selectedCategory },
    actions: { handleSelectedCategory },
  } = HomeManager();

  return (
    <HomeWrapper>
      <Hero />
      <TopCategories
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      <SelectedCategoryRecipes selectedCategory={selectedCategory} />
    </HomeWrapper>
  );
};

export default Home;
