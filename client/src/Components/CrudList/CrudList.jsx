import React from "react";
import { EditableItem, AddNewItem } from "./components";
import { CrudListContext } from "./context";

import CrudListManager from "./CrudListManager";

import {
  CrudListWrapper,
  ListContainer,
  ItemContainer,
  ItemName,
  EditableModeWrapper,
  InputLabel,
  ListItems,
} from "./styles";

const CrudList = ({ isEditMode = false, dataset, label, name }) => {
  const { data, actions } = CrudListManager({ isEditMode, dataset, name });

  return (
    <CrudListContext.Provider value={{ data, actions }}>
      <CrudListWrapper>
        {!isEditMode && (
          <ListContainer>
            {dataset?.map((item, i) => (
              <ItemContainer key={i}>
                <i className="icon-right-open" />
                <ItemName>{item}</ItemName>
              </ItemContainer>
            ))}
          </ListContainer>
        )}

        {isEditMode && (
          <EditableModeWrapper>
            {label && <InputLabel>{label}</InputLabel>}
            <ListItems>
              {data.dataset.map((item, i) => (
                <EditableItem key={i} text={item} index={i} />
              ))}
              <AddNewItem />
            </ListItems>
          </EditableModeWrapper>
        )}
      </CrudListWrapper>
    </CrudListContext.Provider>
  );
};

export default CrudList;
