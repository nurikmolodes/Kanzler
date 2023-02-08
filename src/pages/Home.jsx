import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.scss";
import toCatalog from "../assets/toCatalog.svg";
import redPen from "../assets/redPen.svg";
import whitePen from "../assets/whitePen.svg";
import call from "../assets/calling.svg";
import linear from "../assets/linear.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="left">
          <h1>Канцелярия, товары для полиграфии</h1>
          <p>
            Основные направления – бумага и расходные материалы для полиграфии,
            поставки элитного кофе и чая, немецкого премиум пива.
          </p>
          <Link to={"/catalog"}>
            <img src={toCatalog} />
          </Link>
        </div>
        <div className="right">
          <img src={redPen} />
          <img src={whitePen} />
          <img src={linear} />
          <img src={call} />
        </div>
      </div>
    </div>
  );
};

export default Home;
