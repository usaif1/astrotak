//dependencies
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { nanoid } from "nanoid";

//imports
import { routes } from "./RouteDetails";
import { Header, TabNavigator } from "components/common";

const Routes: React.FC = () => {
  return (
    <Router>
      {/* <Header /> */}
      {/* <TabNavigator /> */}
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route) => {
            return <Route key={nanoid()} path={`${route.path}`} element={route.component} />;
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
