import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import BannerAnimated from "../images/bannerAnimated.png";
import "../styles/HomeStyles.css";

const Home = (props) => {
  return (
    <Layout isConnected={props.isConnected}>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div>
          <img src={BannerAnimated} alt="header" />
        </div>
        <div className="headerContainer">
          <h1>Restaurant Universitaire</h1>
          <Link to="/login">
            <button className="btn"> LogIn
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
