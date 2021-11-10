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
import Loader from "./Components/Loader/Loader";

function App() {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

<<<<<<< HEAD
    console.log("UID ", user && user.uid);
=======
    // console.log("UID ", user && user.uid);
>>>>>>> b6b87c4b07ab62c26af1bdd5c1caccf4da7d253d
    user && localStorage.setItem("loggedIn", "yes");
    // it will run when component unmounts like componentDidUnmount()
    return () => {
      unsub();
    };
  });
  // console.log(user);
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "yes" && !user) return <Loader />;

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
            path={[
              "/dashboard",
              "/trends",
              "/profile",
<<<<<<< HEAD
              "/settings",
              "/settings/personal",
              "/settings/updatepassword",
              "/contests",
=======
              "/contests",
              "/settings",
              "/octoProfile",
>>>>>>> b6b87c4b07ab62c26af1bdd5c1caccf4da7d253d
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
    </div>
  );
}

export default App;
