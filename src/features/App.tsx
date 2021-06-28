import { Fragment } from "react";
import { Switch, Route as RRDRoute } from "react-router-dom";
import { Route } from "../config/routing";
import CssBaseline from "common/CssBaseline/CssBaseline";
import IndexPage from "./IndexPage/IndexPage";
import ContinentsPage from "./ContinentsPage/ContinentsPage";
import ContinentPage from "./ContinentPage/ContinentPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <RRDRoute path={Route.ContinentsPage} exact>
          <ContinentsPage />
        </RRDRoute>
        <RRDRoute path={Route.ContinentPage} exact>
          <ContinentPage />
        </RRDRoute>
        <RRDRoute>
          <IndexPage />
        </RRDRoute>
      </Switch>
      <CssBaseline />
    </Fragment>
  );
}

export default App;
