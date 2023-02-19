import Hamburger from "hamburger-react";
import React, { useState } from "react";
import call from "../assets/call.svg";
import email from "../assets/email.svg";
import burger from "../assets/burger.svg";
import catalog from "../assets/catalog.svg";
import cartt from "../assets/cart.svg";
import user from "../assets/user.svg";
import grey from "../assets/grey.svg";
import search from "../assets/search.svg";
import "../App.scss";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchh, cart }) => {
  // OPEN BURGER
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR  */}
      <nav>
        <ul>
          <li>Каталог</li>
          <li>Акции</li>
          <li>Популярные товары</li>
          <li>Новинки</li>
          <li>Новости</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>
        <div className="burger" onClick={() => setOpen(!open)}>
          <Hamburger color="grey" size={30} />
        </div>
        {open && (
          <div className="modal">
            <a>Каталог</a>
            <a>Акции</a>
            <a>Популярные товары</a>
            <a>Новинки</a>
            <a>Новости</a>
            <a>О компании</a>
            <a>Контакты</a>
          </div>
        )}
        <div>
          <img src={email} alt="" />
          <img src={call} alt="" />
        </div>
      </nav>
      {/* HEADER  */}
      <header>
        <Link to={"/"}>
          <div className="grey">
            <img src={grey} alt="" />
            <img src={burger} alt="" />
          </div>
        </Link>
        <Link to={"/catalog"}>
          <div className="catalog">
            <img src={catalog} alt="" />
          </div>
        </Link>
        <div className="search">
          <img src={search} alt="" />
          <input
            onChange={(e) => setSearchh(e.target.value)}
            type="text"
            placeholder="Найти товар"
          />
        </div>
        <div className="cart" style={{ position: "relative" }}>
          <div className="round">
            <h2>{cart.length}</h2>
          </div>
          <Link to={"/order"}>
            <img src={cartt} alt="" />
          </Link>
          <img src={user} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
