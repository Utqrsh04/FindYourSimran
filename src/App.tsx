import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Dashboard from "./Pages/AppContainer/Dashboard";
import NotFound from "./Pages/AppContainer/NotFound";
import Authpage from "./Pages/Auth/Authpage";
import { useHistory } from "react-router-dom";

function App() {
  const [user, setUser] = useState<any>("");
  const history = useHistory();

  useEffect(() => {
    let userFromLocal = localStorage.getItem("userInfo");

    if (userFromLocal) {
      setUser(JSON.parse(userFromLocal));
    }

    if (user) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  console.log("In App", user);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>

        <Route path={["/login", "/signup"]} exact>
          {user ? <Redirect to="/dashboard" /> : <Authpage />}
        </Route>

        <Route
          exact
          path={[
            "/dashboard",
            "/trends",
            "/connections",
            "/profile",
            "/settings",
            "/settings/personal",
            "/settings/updatepassword",
            "/contests",
          ]}
        >
          {user ? <Dashboard /> : <Redirect to="/login" />}
        </Route>

        <Route path="/notFound" exact>
          <NotFound />
        </Route>
        <Route>
          <Redirect to="/notFound" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
