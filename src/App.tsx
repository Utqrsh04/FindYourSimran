import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./Pages/AppContainer/Dashboard";
import NotFound from "./Pages/AppContainer/NotFound";
import { auth } from "./firebase";
import Authpage from "./Pages/Auth/Authpage";

function App() {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

    console.log("UID ", user && user.uid);
    // it will run when component unmounts like componentDidUnmount()
    return () => {
      unsub();
    };
  });

  return (
    <div>
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
            path={["/dashboard", "/trends", "/profile","/settings","/contests"]}
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
    </div>
  );
}

export default App;
