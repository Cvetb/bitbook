import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) =>{
    return(
        <nav className="blue darken-4">
        <div className="container nav-wrapper">
        <span className="left">
          <Link to = '/' className="brand-logo">Bitbook</Link>
          </span>
          <div className="row">
          <i className="material-icons right hide-on-large">menu</i>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to = '/' ><i className="large material-icons left blue-grey-text text-darken-4">list</i>Feed</Link></li>
            <li><Link to = '/people'><i className="large material-icons left blue-grey-text text-darken-4">people</i>People</Link></li>
            <li><Link to = '/profile'><i className="large material-icons left blue-grey-text text-darken-4">person</i>Profile</Link></li>
            
            </ul>
        </div>
        </div>
      </nav>
    )
    }
    export default Header;