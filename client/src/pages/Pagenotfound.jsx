import React from "react";
import Layout from "../components/Layout";

const Pagenotfound = (props) => {
  return (
    <Layout isConnected={props.isConnected}>
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default Pagenotfound;
