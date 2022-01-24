import React from "react";
import "./App.css";
import BookWindow from "./components/BookWindow/BookWindow";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <BookWindow />
      <Footer />
    </div>
  );
}

export default App;
