import React, { Fragment } from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import CreateEmploye from "./Component/CreateEmploye";
import PageNotFound from "./Component/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllEmploye from "./Component/AllEmploye";
import EditEmploye from "./Component/EditEmploye";
const App = () => {
  return (
    <Fragment>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-employee" exact component={CreateEmploye} />
            <Route path="/all-employee" exact component={AllEmploye} />
            <Route path="/edit-employee/:id" exact component={EditEmploye} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
};

export default App;
