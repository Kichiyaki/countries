import { Switch, Route as RRDRoute } from "react-router-dom";
import IndexPage from "./IndexPage/IndexPage";
import { Route } from "../config/routing";

function App() {
  return (
    <Switch>
      <RRDRoute path={Route.IndexPage} exact>
        <IndexPage />
      </RRDRoute>
    </Switch>
  );
}

export default App;
