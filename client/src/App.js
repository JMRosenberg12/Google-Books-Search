import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/search';
import Save from './pages/save';
import NavbarComp from './components/nav';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Save" component={Save} />
          <Route path="*" component={Search} />
        </Switch>
      </div>
    </Router>

  );
}


export default App;
