import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ isConnected,children }) => {
  return (
    <>
      <Header isConnected={isConnected}/>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
