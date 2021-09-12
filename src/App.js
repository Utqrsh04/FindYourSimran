import "./App.css";
import Authpage from "./Pages/Auth/Authpage.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Dashboard from "./Pages/AppContainer/Dashboard";

function App() {
  return (
    <div className="App">
    <Router>
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
    </Router>
      
    </div>
  );
}

export default App;
