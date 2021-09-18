// import "./App.css";
import Particle from "./Components/Particles";
import Authpage from "./Pages/Auth/Authpage.jsx";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import Dashboard from "./Pages/AppContainer/Dashboard";
// import Login from "./Pages/Auth/Loginpage";

function App() {
  return (
    <div className="App bg-none max-h-screen overflow-hidden ">
      <Particle />
      <div className="relative bg-none -top-60">
        <Authpage />
      </div>
      {/* <Router>
      <Switch>
        <Route exact path="/">
         <Authpage/>
        </Route>
        <Route exact path="/login">
         <Authpage/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router> */}
    </div>
  );
}

export default App;
