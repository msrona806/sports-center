import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents";
import EventInput from "./pages/EventInput";

const App = () =>
  
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/myevents" component={MyEvents} />
      <Route exact path="/allevents" component={Events} />
      <Route exact path="/inputevent" component={EventInput} />
    </div>
  </Router>; 

export default App;