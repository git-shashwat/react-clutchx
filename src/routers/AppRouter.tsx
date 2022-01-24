import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../App.css";
import BookOverview from "../components/BookOverview/BookOverview";
import BookWindow from "../components/BookWindow/BookWindow";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<BookWindow />} />
        {/* <Route path='/books/:id' element={<BookOverview />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
