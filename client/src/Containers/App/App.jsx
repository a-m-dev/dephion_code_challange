import React from "react";
import { Normalize } from "styled-normalize";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "Components";
import { AppWrapper } from "./styles";
import GlobalStyle from "./stylesGlobal";

import Home from "Containers/Home";
import About from "Containers/About";
import NotFound from "Containers/NotFound";

import { RouterRoutes } from "utils/routes";

const App = () => {
  return (
    <AppWrapper>
      <Normalize />
      <GlobalStyle />

      <Header />

      <main>
        <Switch>
          <Route exact path={RouterRoutes.home} component={Home} />
          <Route path={RouterRoutes.about} component={About} />
          <Route path={RouterRoutes.notFound} component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </AppWrapper>
  );
};

export default App;
