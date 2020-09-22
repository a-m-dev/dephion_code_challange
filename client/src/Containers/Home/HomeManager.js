import { useState, useCallback } from "react";
// import { useSelector } from "react-redux";
// import { useInjectSaga } from "utils/injectSaga";
// import { useInjectReducer } from "utils/injectReducer";

// import { useBindDispatch } from "utils/redux/useBindDispatch";

// const HomeDataKetOnRedux = "HomeData";

const HomeManager = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectedCategory = useCallback(
    (catId) => {
      setSelectedCategory(catId);
    },
    [setSelectedCategory]
  );

  return {
    data: { selectedCategory },
    actions: { handleSelectedCategory },
  };
};

export default HomeManager;
