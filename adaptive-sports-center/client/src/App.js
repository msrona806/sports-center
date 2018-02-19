import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import MyEvents from "./pages/MyEvents";



const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/myevents" component={MyEvents} />
      <Route exact path="/allevents" component={Events} />
    </div>
  </Router>;

export default App;