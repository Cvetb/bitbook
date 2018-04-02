
import React, { Component } from 'react';
import './App.css';
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
            <Route path ='/peoplePage/:id' component={ProfilePage} />
            <Route path ='/:type/:id' component={SinglePostPage} />
           

        </Switch>
      </div>
    );
  }
}

export default App;
