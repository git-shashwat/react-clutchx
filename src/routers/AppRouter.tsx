import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../App.css";
import BookDetails from "../components/BookDetails/BookDetails";
import BookWindow from "../components/BookWindow/BookWindow";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={BookWindow} />
        <Route path='/books/:id' component={BookDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
