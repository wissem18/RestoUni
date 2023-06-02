import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import BannerAnimated from "../images/bannerAnimated.png";
import "../styles/HomeStyles.css";
import useResto from "../context/RestoContext";
import useUser from "../context/UserContext";

const Home = (props) => {
  const {myResto,setMyResto}  = useResto();
  const {myUser,setMyUser}  = useUser();
  return (
    <Layout >
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div>
          <img src={BannerAnimated} alt="header" />
        </div>
        <div className="headerContainer">
          <h1>Restaurant Universitaire</h1>
          {myResto || myUser ? (<Link to="/contact">
            <button className="btn">Contact</button>
          </Link>) :( <Link to="/login">
            <button className="btn">LogIn</button>
          </Link>)}

        </div>
      </div>
    </Layout>
  );
};

export default Home;
