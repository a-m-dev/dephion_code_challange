import React, { useState, useCallback } from "react";
import { Button } from "Components";
import { useCrudListContext } from "Components/CrudList/context";

import { AddNewItemWrapper, Input, InputError } from "./styles";

const AddNewItem = () => {
  const [val, setVal] = useState("");
  const [error, setError] = useState("");

  const {
    actions: { handleAddToDataset },
  } = useCrudListContext();

  const handleInputChange = useCallback(
    ({ target: { value } }) => {
      setVal(value);
      setError("");
    },
    [val, setVal]
  );

  const handleAddItem = useCallback(
    (e) => {
      e.preventDefault();
      if (val === "") {
        setError("Write something...");
        return;
      }
      handleAddToDataset(val);
      setVal("");
    },
    [val]
  );

  return (
    <AddNewItemWrapper>
      <Input onChange={handleInputChange} value={val} />
      {error && (
        <InputError className="error">
          <span>{error}</span>
        </InputError>
      )}
      <Button label="Add" onClick={handleAddItem} />
    </AddNewItemWrapper>
  );
};

export default AddNewItem;
