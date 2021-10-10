import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Dashboard from "./Pages/AppContainer/Dashboard";
import NotFound from "./Pages/AppContainer/NotFound";
import Authpage from "./Pages/Auth/Authpage";

function App() {
  useEffect(() => {
    <Loader/>
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Authpage />
          </Route>
          <Route exact path={["/dashboard" , "/trends" ]}>
            <Dashboard />
          </Route>
          <Route path="/notFound" exact>
            <NotFound />
          </Route>
          <Route>
            <Redirect to="/notFound" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
