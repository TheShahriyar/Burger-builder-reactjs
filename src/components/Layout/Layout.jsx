import React from "react";
import "./Layout.scss";

const Layout = props => {
  return (
    <div>
      <div>Toolbar, SideDrawer, backdrop</div>
      <main className="content">{props.children}</main>
    </div>
  );
};

export default Layout;
