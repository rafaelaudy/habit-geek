import React, { Fragment } from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default Layout;
