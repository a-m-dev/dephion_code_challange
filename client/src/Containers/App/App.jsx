import React from "react";
import { Normalize } from "styled-normalize";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "Components";
import { BodyWrapper } from "./styles";
import GlobalStyle from "./stylesGlobal";

import Home from "Containers/Home";
import About from "Containers/About";
import Authentication from "Containers/Authentication";
import NotFound from "Containers/NotFound";

import { RouterRoutes } from "utils/routes";

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Header />

      <BodyWrapper>
        <Switch>
          <Route
            exact
            path={RouterRoutes.authentication}
            component={Authentication}
          />

          <Route exact path={RouterRoutes.home} component={Home} />
          <Route exact path={RouterRoutes.about} component={About} />

          <Route path={RouterRoutes.notFound} component={NotFound} />
        </Switch>
      </BodyWrapper>

      <Footer />
    </>
  );
};

export default App;
