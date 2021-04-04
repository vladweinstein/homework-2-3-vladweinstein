import React from "react";
import { Route, Switch } from "react-router-dom";

import Page1 from "./Components/page_1";
import Page2 from "./Components/page_2";
import Page3 from "./Components/page_3";
import Page4 from "./Components/page_4";
import Error0 from "./Components/errorpage";
import PageNavigation from "./Components/navigationbar";
import HomePage from "./Components/allnumbers";
import { pageData } from "./Components/pagedata";
import Even from "./Components/odd";
import Odd from "./Components/even";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SiteButtons from "./Components/sitebuttons";

function App() {
  return (
    <main>
      <PageNavigation />
      <SiteButtons />
      <Switch>
        <Route
          path="/page_1"
          render={(props) => <Page1 numbersData={pageData} {...props} />}
        />
        <Route
          path="/page_2"
          render={(props) => <Page2 numbersData={pageData} {...props} />}
        />
        <Route
          path="/page_3"
          render={(props) => <Page3 numbersData={pageData} {...props} />}
        />
        <Route
          path="/page_4"
          render={(props) => <Page4 numbersData={pageData} {...props} />}
        />
        <Route
          path="/All_Numbers"
          render={(props) => <HomePage numbersData={pageData} {...props} />}
        />
        <Route
          path="/Odd_Numbers"
          render={(props) => <Odd numbersData={pageData} {...props} />}
        />
        <Route
          path="/Even_Numbers"
          render={(props) => <Even numbersData={pageData} {...props} />}
        />
        <Route path="/error" component={Error0} />
      </Switch>
    </main>
  );
}

export default App;
