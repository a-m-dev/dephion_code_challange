import React from "react";
import { Normalize } from "styled-normalize";
import { Switch, withRouter } from "react-router-dom";
import { Header, Footer } from "Components";
import { BodyWrapper } from "./styles";
import GlobalStyle from "./stylesGlobal";
import { ToastContainer } from "react-toastify";

import { PublicRoute, PrivateRoute } from "./components/Router";

import Home from "Containers/Home";
import Category from "Containers/Category";
import Categories from "Containers/Categories";
import Authentication from "Containers/Authentication";
import Profile from "Containers/Profile";
import NotFound from "Containers/NotFound";

import { RouterRoutes, PrivateRoutes } from "utils/routes";

import { GlobalAppContext } from "./context";
import AppManager from "./AppManager";

import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  const {
    data,
    data: { isLoggedIn, isFullScreenMode },
    actions: { handleLogout },
  } = AppManager(props);

  return (
    <GlobalAppContext.Provider value={{ data }}>
      <Normalize />
      <GlobalStyle />

      {!isFullScreenMode && (
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}

      <BodyWrapper isFullScreenMode={isFullScreenMode}>
        <Switch>
          <PublicRoute
            exact
            path={RouterRoutes.authentication}
            component={Authentication}
          />

          <PublicRoute exact path={RouterRoutes.home} component={Home} />
          <PublicRoute
            exact
            path={RouterRoutes.categories}
            component={Categories}
          />
          <PublicRoute
            exact
            path={RouterRoutes.category}
            component={Category}
          />

          <PrivateRoute
            exact
            path={PrivateRoutes.profile}
            component={Profile}
          />
          <PublicRoute path={RouterRoutes.notFound} component={NotFound} />
        </Switch>
      </BodyWrapper>

      {!isFullScreenMode && <Footer />}

      <ToastContainer
        limit={3}
        autoClose={3000}
        draggable={true}
        closeOnClick={true}
        pauseOnHover={true}
        progress={undefined}
        hideProgressBar={false}
        position="bottom-center"
      />
    </GlobalAppContext.Provider>
  );
};

export default withRouter(App);
