import React, { useMemo, useCallback } from "react";
import { getImage } from "utils/getImage";
import {
  RecipeHeroWrapper,
  CoverHolder,
  CoverImg,
  Dim,
  Details,
  CoverSection,
  CoverWrapper,
  Cover,
  CoverDescription,
  Title,
  Creator,
  CreatorAvatar,
} from "./styles";

const RecipeHero = ({ name, cover, creator }) => {
  return (
    <RecipeHeroWrapper>
      <CoverHolder>
        <CoverImg src={getImage(cover)} alt="category cover" />
        <Dim />
      </CoverHolder>
      <Details>
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
          </CoverDescription>
        </CoverSection>
      </Details>
    </RecipeHeroWrapper>
  );
};

export default RecipeHero;
