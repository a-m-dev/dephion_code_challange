import { useState, useEffect, useCallback } from "react";
import { useFormikContext } from "formik";

const CrudListManager = ({ dataset: _dataset, name, isEditMode }) => {
  const [dataset, setDataset] = useState(_dataset);

  let setFieldValue = null;

  const options = useFormikContext();
  if (isEditMode) {
    setFieldValue = options.setFieldValue;
  }

  useEffect(() => {
    if (isEditMode) {
      setFieldValue(name, dataset);
    }
  }, [isEditMode, dataset]);

  const handleAddToDataset = useCallback(
    (val) => {
      setDataset((data) => [...data, val]);
    },
    [dataset, setDataset]
  );

  const handleRemoveFromDataset = useCallback(
    ({ index }) => {
      const newDataset = [
        ...dataset.slice(0, index),
        ...dataset.slice(index + 1, dataset.length),
      ];
      setDataset(newDataset);
    },
    [dataset]
  );

  return {
    data: { dataset },
    actions: { handleAddToDataset, handleRemoveFromDataset },
  };
};

export default CrudListManager;
