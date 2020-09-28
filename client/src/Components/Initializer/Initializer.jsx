import React from "react";
import { Loading } from "Components";
import { InitializerWrapper } from "./styles";

import InitializerManager from "./InitilizerManager";

const Initializer = () => {
  const { loading } = InitializerManager();

  return (
    <InitializerWrapper isLoading={loading}>
      <Loading />
    </InitializerWrapper>
  );
};

export default Initializer;
