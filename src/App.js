import React from 'react';
import "./index.css";
import { Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home  from "./Home";
import About  from "./About";
import Service  from "./Service";
import Contact  from "./Contact";
import Navbar from './Navbar';



function App() {
 return(
          <>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Service" component={Service}/>
          <Route exact path="/Contact" component={Contact}/>
          


          </Switch>



          </>
    
  );
}

export default App;
