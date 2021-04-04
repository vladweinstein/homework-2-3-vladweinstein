import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Page1 from "./Components/page_1";
import Page2 from "./Components/page_2";
import Page3 from "./Components/page_3";
import Page4 from "./Components/page_4";
import Error0 from "./Components/errorpage";
import PageNavigation from "./Components/navigationbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <main>
      <PageNavigation />
      <div className="buttons">
        <Link to="/page_1">
          <Button>Page 1</Button>
        </Link>

        <Link to="/page_2">
          <Button>Page 2</Button>
        </Link>

        <Link to="/page_3">
          <Button>Page 3</Button>
        </Link>

        <Link to="/page_4">
          <Button>Page 4</Button>
        </Link>
      </div>
      <Switch>
        <Route path="/page_1" component={Page1} />
        <Route path="/page_2" component={Page2} />
        <Route path="/page_3" component={Page3} />
        <Route path="/page_4" component={Page4} />

        <Route path="/error" component={Error0} />
      </Switch>
    </main>
  );
}

export default App;
