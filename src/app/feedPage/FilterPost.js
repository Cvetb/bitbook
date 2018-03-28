import React, { Component } from "react";
import M from "materialize-css";

class FilterPost extends Component {
  componentDidMount() {
    var elem = document.querySelector(".dropdown-trigger");
    var instance = M.Dropdown.init(elem);
  }

  render() {
    return (
      <div className="right">
        <a className="dropdown-trigger btn" data-target="dropdown1">
          All posts
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a>one</a>
          </li>

          <li className="divider" tabindex="-1" />
          <li>
            <a>
              {" "}
              <i className="material-icons">video_library</i>Videos
            </a>
          </li>
          <li>
            <a>
              <i className="material-icons">image</i>Images
            </a>
          </li>
          <li>
            <a>
              <i className="material-icons">text_format</i>Text
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterPost;
