import React, { useState, useEffect, useCallback, useMemo } from "react";
import { withRouter } from "react-router-dom";
import { PrivateRoutes } from "utils/routes";
import { Button, RecipeList, CategoryList } from "Components";
import { useProfileContext } from "Containers/Profile/context";
import { UserDataWrapper, MenuSection, MenuItem, DataSection } from "./styles";

const UserData = ({ location, history }) => {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const {
    data: { userData },
  } = useProfileContext();

  useEffect(() => {
    if (location.search) {
      const qs = new URLSearchParams(location.search);
      const tabIndex = Number(qs.get("tab"));
      if (tabIndex) setSelectedMenu(tabIndex);
    }
  }, []);

  const menus = useMemo(() => {
    return [
      { id: 1, name: "Recipes" },
      { id: 2, name: "favorites" },
      { id: 3, name: "Categories" },
    ];
  }, []);

  const handleMakeMenuActive = useCallback((e) => {
    const { index } = e.currentTarget.dataset;
    setSelectedMenu(String(index));
    history.push(`${PrivateRoutes.profile}?tab=${index}`);
  }, []);

  const handleNavogateToCreateRecipe = useCallback(() => {
    history.push(PrivateRoutes.recipe.create);
  }, []);

  return (
    <UserDataWrapper>
      <MenuSection>
        <Button label="Create Recipe" onClick={handleNavogateToCreateRecipe} />
        {menus.map(({ id, name }) => (
          <MenuItem
            key={id}
            data-index={id}
            onClick={handleMakeMenuActive}
            isSelected={id == selectedMenu}
          >
            {name}
          </MenuItem>
        ))}
      </MenuSection>
      <DataSection>
        {selectedMenu == 1 && <RecipeList dataset={userData?.recipes} />}
        {selectedMenu == 2 && <RecipeList dataset={userData?.favorites} />}
        {selectedMenu == 3 && (
          <CategoryList dataset={userData?.followingCategories} />
        )}
      </DataSection>
    </UserDataWrapper>
  );
};

export default withRouter(UserData);
