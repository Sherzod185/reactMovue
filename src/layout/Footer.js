import React from "react";
import play from "../img/play.svg"
class Footer extends React.Component {
  render() {
    return <div className="footer-main">
      {" "}
      <div className="main-foot">
        <a href="#!">
          <img src={play} alt="" />
        </a>
      </div>{" "}
      <footer className="page-footer">
        <div className="footer-copyright">
          <h3>&copy; {new Date().getFullYear()} Copyright Rederved</h3>
        </div>
      </footer>
    </div>;
  }
}
export default Footer;
