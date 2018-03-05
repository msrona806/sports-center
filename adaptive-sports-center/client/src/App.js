import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Events from "./pages/Events";
import Home from "./pages/Home";
import SharedEvents from "./pages/SharedEvents";
import EventInput from "./pages/EventInput";
import SignUp from "./pages/SignUp";

const App = () =>
  
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/sharedevents" component={SharedEvents} />
      <Route exact path="/allevents" component={Events} />
      <Route exact path="/inputevent" component={EventInput} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>; 

export default App;