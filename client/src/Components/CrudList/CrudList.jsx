import React from "react";

import {
  CrudListWrapper,
  ListContainer,
  ItemContainer,
  ItemName,
} from "./styles";

const CrudList = ({ isEditMode = false, dataset }) => {
  return (
    <CrudListWrapper>
      <ListContainer>
        {dataset?.map((item, i) => (
          <ItemContainer key={i}>
            <i className="icon-right-open" />
            <ItemName>{item}</ItemName>
          </ItemContainer>
        ))}
      </ListContainer>
    </CrudListWrapper>
  );
};

export default CrudList;
