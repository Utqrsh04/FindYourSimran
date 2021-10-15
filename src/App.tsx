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
import LoginPage from "./Pages/Auth/LoginPage/LoginPage";
import SignupPage from "./Pages/Auth/SignUpPage/SignupPage";

function App() {
  useEffect(() => {
    <Loader />;
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path={["/dashboard", "/trends","/profile", "/events"]}>
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
