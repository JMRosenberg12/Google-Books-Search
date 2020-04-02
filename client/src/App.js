  
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/saved";
import SearchBooks from "./pages/books";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/nav";
// import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          {/* <Route component={NoMatch} />  */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

