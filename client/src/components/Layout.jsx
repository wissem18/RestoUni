import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children },props) => {
  return (
    <>
      <Header isConnected={props.isConnected}/>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
