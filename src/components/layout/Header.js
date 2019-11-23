import React from "react";
import { Link } from "@reach/router";
import { useTranslation } from "react-i18next";

import "./Header.scss";

function Header({ jwt }) {
  const { t } = useTranslation();

  const getLinkClass = ({ isCurrent }) => {
    return {
      className: isCurrent ? "nav-item nav-link active" : "nav-item nav-link"
    };
  };

  let userLink, userLabel;
  if (jwt) {
    userLink = "/habit-geek/profile";
    userLabel = t("nav-profile");
  } else {
    userLink = "/habit-geek/login";
    userLabel = t("nav-login");
  }

  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark header">
        <Link className="navbar-brand" to="/habit-geek/habits">
          Habit Geek!
        </Link>
        <div className="navbar-nav">
          <Link getProps={getLinkClass} to="/habit-geek/habits">
            {t("nav-my-habits")}
          </Link>
          <Link getProps={getLinkClass} to="/habit-geek/history">
            {t("nav-history")}
          </Link>
          <Link getProps={getLinkClass} to={userLink}>
            {userLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
