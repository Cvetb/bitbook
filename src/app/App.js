
import React, { Component } from 'react';
import Header from './partials/Header'
import './App.css';
import Footer from "./partials/Footer";
import ProfilePage from "./profilePage/ProfilePage";




class App extends Component {

  render() {
    return (
      <div className="App">
     <ProfilePage/>
      </div>
    );
  }
}

export default App;
