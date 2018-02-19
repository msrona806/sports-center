import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents";



const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/myevents" component={MyEvents} />
      <Route exact path="/allevents" component={Events} />
    </div>
  </Router>;

export default App;