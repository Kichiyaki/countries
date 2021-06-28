import { Fragment } from "react";
import { Switch, Route as RRDRoute } from "react-router-dom";
import CssBaseline from "common/CssBaseline/CssBaseline";
import IndexPage from "./IndexPage/IndexPage";
import { Route } from "../config/routing";

function App() {
  return (
    <Fragment>
      <Switch>
        <RRDRoute path={Route.IndexPage} exact>
          <IndexPage />
        </RRDRoute>
      </Switch>
      <CssBaseline />
    </Fragment>
  );
}

export default App;
