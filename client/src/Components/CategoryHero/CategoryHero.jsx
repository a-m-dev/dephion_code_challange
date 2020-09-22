import React, { useMemo, useCallback } from "react";
import { getImage } from "utils/getImage";
import { withRouter } from "react-router-dom";
import {
  CategoryCardWrapper,
  CoverImg,
  Dim,
  Details,
  Heading,
  Descripbtion,
  Misc,
  Section,
} from "./styles";

const CategoryCard = ({
  _id,
  name,
  cover,
  description,
  followers,
  recipesCount,
  creator,
  selectedCategoryId,
}) => {
  const MiscData = useMemo(() => {
    return [
      { id: 1, icon: "icon-group", label: `${followers} followers` },
      { id: 2, icon: "icon-newspaper", label: `${recipesCount} recipes` },
      {
        id: 3,
        icon: "icon-newspaper",
        label: (creator && creator.name) || "someOne",
      },
    ];
  }, [followers, recipesCount, creator]);

  return (
    <CategoryCardWrapper>
      <CoverImg src={getImage(cover)} alt="category cover" />
      <Details>
        <Heading>{name}</Heading>
        <Descripbtion>{description}</Descripbtion>
        <Misc>
          {MiscData.map(({ id, icon, label }) => (
            <Section key={id}>
              <i className={icon} />
              <span>{label}</span>
            </Section>
          ))}
        </Misc>
      </Details>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
