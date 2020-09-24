import React from "react";

import { ListContainer, ItemContainer, ItemName } from "./styles";

const CrudListView = ({ dataset }) => {
  return (
    <ListContainer>
      {dataset?.map((item, i) => (
        <ItemContainer key={i}>
          <i className="icon-right-open" />
          <ItemName>{item}</ItemName>
        </ItemContainer>
      ))}
    </ListContainer>
  );
};

export default CrudListView;
