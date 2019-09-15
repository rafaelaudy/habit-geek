import React from "react";
import { Link } from "@reach/router";

import "./Header.scss";

function Header(props) {
  const getLinkClass = ({ isCurrent }) => {
    return {
      className: isCurrent ? "nav-item nav-link active" : "nav-item nav-link"
    };
  };
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark header">
        <Link className="navbar-brand" to="/">
          Habit Geek!
        </Link>
        <div className="navbar-nav">
          <Link getProps={getLinkClass} to="/">
            My habits
          </Link>
          <Link getProps={getLinkClass} to="/history">
            History
          </Link>
          <Link getProps={getLinkClass} to="/profile">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
