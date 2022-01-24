import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../App.css";
import BookWindow from "../components/BookWindow/BookWindow";
import Header from "../components/Header/Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<BookWindow />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
