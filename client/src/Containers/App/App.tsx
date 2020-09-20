import React from "react";
import { Normalize } from "styled-normalize";
import { Header, Footer } from "Components";
import { AppWrapper } from "./styles/styles";
import GlobalStyle from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Normalize />
      <GlobalStyle />

      <Header />
      <main>This is main</main>
      <Footer />
    </AppWrapper>
  );
};

export default App;
