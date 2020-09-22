import React, { useMemo, useCallback } from "react";
import { getImage } from "utils/getImage";
import { withRouter } from "react-router-dom";
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
  selectedCategoryId,
  isClickable,
  history,
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

  const handleItemClick = useCallback(() => {
    if (isClickable) {
      history.push(PublicRoutes.category(_id));
    }
  }, [_id, history, isClickable]);

  return (
    <CategoryCardWrapper
      onClick={handleItemClick}
      isSelected={selectedCategoryId === _id}
    >
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

export default withRouter(CategoryCard);
