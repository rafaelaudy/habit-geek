import React, { Fragment } from "react";
import HeaderContainer from "./HeaderContainer";

function Layout({ children }) {
  return (
    <Fragment>
      <HeaderContainer />
      {children}
    </Fragment>
  );
}

export default Layout;
