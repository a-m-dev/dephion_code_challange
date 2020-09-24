import React, { useMemo, useCallback } from "react";
import { getImage } from "utils/getImage";
import { withRouter } from "react-router-dom";
import { Button } from "Components";
import {
  RecipeWrapper,
  Background,
  Dim,
  BackgroundImg,
  Content,
  CoverSection,
  CoverWrapper,
  Cover,
  CoverDescription,
  Title,
  CreatorAvatar,
  Creator,
  Detail,
  DetailSection,
  RecipeBaseItems,
  Items,
  RecipeData,
} from "./styled";
import { PublicRoutes } from "utils/routes";

const RecipeCard = ({
  _id,
  cover,
  name,
  numberOfServing,
  cookingTime,
  ingredients,
  preparationSteps,
  favorites,
  shares,
  creator,
  category,
  history,
}) => {
  const RecipeDetailData = useMemo(() => {
    return [
      {
        id: 1,
        icon: "icon-tags",
        label: category?.name || "some cat",
      },
      { id: 2, icon: "icon-heart", label: favorites },
      { id: 3, icon: "icon-share", label: shares },
    ];
  }, [favorites, shares, category]);

  const RecipeBaseData = useMemo(() => {
    return [
      { id: 1, icon: "icon-group", label: `${numberOfServing} people` },
      { id: 2, icon: "icon-clock", label: `${cookingTime} mins` },
      {
        id: 3,
        icon: " icon-map-signs",
        label: `${ingredients?.length} items needed`,
      },
      {
        id: 4,
        icon: "icon-newspaper",
        label: `${preparationSteps?.length} steps`,
      },
    ];
  }, [numberOfServing, cookingTime, ingredients, preparationSteps]);

  const handleNavigateToRecipe = useCallback(
    () => history.push(PublicRoutes.recipe(_id)),
    [_id, history]
  );

  return (
    <RecipeWrapper>
      <Background>
        <Dim />
        <BackgroundImg
          alt={name}
          src={getImage(cover)}
          data-item="background-cover"
        />
      </Background>
      <Content>
        <CoverSection>
          <CoverWrapper>
            <Cover src={getImage(cover)} alt={name} />
          </CoverWrapper>
          <CoverDescription>
            <Title>{name}</Title>
            <Creator>
              {creator && creator.avatar && (
                <CreatorAvatar
                  src={getImage(creator.avatar)}
                  alt={creator.name}
                />
              )}

              <span>by {(creator && creator.name) || "someone"}</span>
            </Creator>
            <Detail>
              {RecipeDetailData.map(({ id, icon, label }) => (
                <DetailSection key={id}>
                  <i className={icon} />
                  <span>{label}</span>
                </DetailSection>
              ))}
            </Detail>
          </CoverDescription>
        </CoverSection>
        <RecipeBaseItems>
          <Items>
            {RecipeBaseData.map(({ id, icon, label }) => (
              <RecipeData key={id}>
                <i className={icon} />
                <span>{label}</span>
              </RecipeData>
            ))}
          </Items>
          <Button label="Start Cooking" onClick={handleNavigateToRecipe} />
        </RecipeBaseItems>
      </Content>
    </RecipeWrapper>
  );
};

export default withRouter(RecipeCard);
