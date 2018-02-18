import React from "react";
import {Router, Route} from "react-router-dom";
import Events from "./pages/Events";



const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Events} />
      
    </div>
  </Router>;

export default App;