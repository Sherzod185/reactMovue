import React from "react"
import play from "../img/play.svg"
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__nav">
          <a className="brandLogo" href="#!">
            Create Movie App
          </a>
          <ul>
            <li>
              <a href="#!">Movie</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>
        <div className="main-head">
          <a href="#!">
            <img
              src={play}
              alt=""
            />
          </a>
        </div>
      </header>
    );
  }
}
export default Header;
