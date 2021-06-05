import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Maintenance from './Components/Maintenance'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/maintenance">
            <Maintenance />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;