import React from 'react';

const Header = (props) =>{
    return(
        <nav className="teal">
        <div className="nav-wrapper">
          <a className="brand-logo left">Bitbook</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a >Feed</a></li>
            <li><a >People</a></li>
            <li><a >Profile</a></li>
          </ul>
        </div>
      </nav>
    )
    }
    export default Header;