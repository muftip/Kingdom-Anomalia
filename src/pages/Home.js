import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> KINGDOM ANOMALIA</h1>
      
        <Link to="/menu">
          <button> afinitas </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
