import { useState, useEffect, useCallback } from "react";
import { useFormikContext } from "formik";

const CrudListManager = ({ dataset: _dataset, name }) => {
  const [dataset, setDataset] = useState([]);

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setDataset(_dataset);
  }, [_dataset]);

  useEffect(() => {
    setFieldValue(name, dataset);
  }, [dataset]);

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
