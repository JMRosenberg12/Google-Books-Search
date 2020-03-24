import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Books from "./pages/books";
import Detail from "./pages/detail";
import NoMatch from "./pages/nomatch";
import Nav from "./components/nav/nav";
import FormSearch from "./pages/formsearch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/search" component={FormSearch} />
          <Route component={NoMatch} />
          <Redirect from = "/api" to = "http://localhost:4000">

          </Redirect>
        </Switch>

      </div>
    </Router>
  );
}


export default App;
