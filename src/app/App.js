import React, { Component } from "react";
import Header from "./partials/Header";
import "./App.css";
import Footer from "./partials/Footer";
import FeedPage from './feedPage/FeedPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FeedPage />
        <Footer />
      </div>
    );
  }
}

export default App;
