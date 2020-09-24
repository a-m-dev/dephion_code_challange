import React from "react";
import { EditableItem, AddNewItem } from "./components";
import { CrudListContext } from "./context";

import CrudListManager from "./CrudListManager";

import {
  CrudListWrapper,
  EditableModeWrapper,
  InputLabel,
  ListItems,
} from "./styles";

const CrudList = ({ label, ...rest }) => {
  const { data, actions } = CrudListManager({ ...rest });

  return (
    <CrudListContext.Provider value={{ data, actions }}>
      <CrudListWrapper>
        <EditableModeWrapper>
          {label && <InputLabel>{label}</InputLabel>}
          <ListItems>
            {data.dataset.map((item, i) => (
              <EditableItem key={i} text={item} index={i} />
            ))}
            <AddNewItem />
          </ListItems>
        </EditableModeWrapper>
      </CrudListWrapper>
    </CrudListContext.Provider>
  );
};

export default CrudList;
