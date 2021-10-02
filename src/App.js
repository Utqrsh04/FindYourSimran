import Authpage from "./Pages/Auth/Authpage.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Pages/AppContainer/Dashboard";
import NotFound from "./Pages/AppContainer/NotFound.jsx";
import Loader from "./Components/Loader/Loader.jsx";
import { useEffect, useState } from "react";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 2000);
  }, []);

  return (
    <div>
      {showLoader === true && <Loader />}
      {showLoader === false && (
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
              <Authpage />
            </Route>
            <Route exact path="/dashboard">
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
      )}
    </div>
  );
}

export default App;
