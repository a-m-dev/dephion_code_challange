import React from "react";
import { Normalize } from "styled-normalize";
import { Switch, Route, withRouter } from "react-router-dom";
import { Header, Footer } from "Components";
import { BodyWrapper } from "./styles";
import GlobalStyle from "./stylesGlobal";

import Home from "Containers/Home";
import About from "Containers/About";
import Authentication from "Containers/Authentication";
import NotFound from "Containers/NotFound";

import { RouterRoutes } from "utils/routes";

import { GlobalAppContext } from "./context";
import AppManager from "./AppManager";

const App = (props) => {
  const {
    data,
    data: { isFullScreenMode },
  } = AppManager(props);

  return (
    <GlobalAppContext.Provider value={{ data }}>
      <Normalize />
      <GlobalStyle />

      {!isFullScreenMode && <Header />}

      <BodyWrapper isFullScreenMode={isFullScreenMode}>
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

      {!isFullScreenMode && <Footer />}
    </GlobalAppContext.Provider>
  );
};

export default withRouter(App);
