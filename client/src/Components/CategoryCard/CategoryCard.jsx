import React, { useMemo } from "react";
import { getImage } from "utils/getImage";
import { PublicRoutes } from "utils/routes";
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
}) => {
  const MiscData = useMemo(() => {
    return [
      { id: 1, icon: "icon-group", label: followers },
      { id: 2, icon: "icon-newspaper", label: recipesCount },
      {
        id: 3,
        icon: "icon-newspaper",
        label: (creator && creator.name) || "someOne",
      },
    ];
  }, []);

  return (
    <CategoryCardWrapper to={PublicRoutes.category(_id)}>
      <CoverImg src={getImage(cover)} alt="category cover" />
      <Dim data-type="dim" />
      <Details data-type="details">
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
