
import React, { Component } from 'react';
import Header from './partials/Header';
import './App.css';
import Footer from "./partials/Footer";
import { Route, Switch } from "react-router-dom";
import FeedPage from './feedPage/FeedPage';
import PeoplePage from './peoplePage/PeoplePage';
import ProfilePage from './profilePage/ProfilePage';
import SinglePostPage from './singlePostPage/SinglePostPage';




class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path ='/' component={FeedPage} />
            <Route path ='/people' component={PeoplePage} />
            <Route path ='/profile' component={ProfilePage} />
            <Route path ='/postPage/:id' component={SinglePostPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
