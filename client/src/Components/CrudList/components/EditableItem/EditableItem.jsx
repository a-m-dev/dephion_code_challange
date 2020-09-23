import React, { useCallback } from "react";
import { useCrudListContext } from "Components/CrudList/context";

import { EditableItemWrapper, TextContainer, Text } from "./styles";

const EditableItem = ({ text, index }) => {
  const {
    data: { dataset },
    actions: { handleRemoveFromDataset },
  } = useCrudListContext();

  const handleRemoveItem = useCallback(() => {
    handleRemoveFromDataset({ index });
  }, [dataset, index]);

  return (
    <EditableItemWrapper>
      <TextContainer>
        <Text>{text}</Text>
        <i className="icon-cancel" onClick={handleRemoveItem} />
      </TextContainer>
    </EditableItemWrapper>
  );
};

export default EditableItem;
