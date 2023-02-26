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
          <li><Link style={{ textDecoration: 'none', color: '#333333' }} to={'/news'}>Новости</Link></li>
          <li><Link style={{ textDecoration: 'none', color: '#333333' }} to={'/aboutus'}>О компании</Link></li>
          <li><Link style={{ textDecoration: 'none', color: '#333333' }} to={'/contact'}>Контакты</Link></li>
        </ul>
        <div className="burger" onClick={() => setOpen(!open)}>
          <Hamburger toggled={open} color="grey" size={30} />
        </div>
        {open && (
          <div className="modal">
            <Link onClick={click => click && setOpen(!open)} style={{ textDecoration: 'none', color: '#333333' }} to={'/catalog'}>Каталог</Link>
            <a>Акции</a>
            <a>Популярные товары</a>
            <a>Новинки</a>
            <Link onClick={click => click && setOpen(!open)} style={{ textDecoration: 'none', color: '#333333' }} to={'/news'}>Новости</Link>
            <Link onClick={click => click && setOpen(!open)} style={{ textDecoration: 'none', color: '#333333' }} to={'/aboutus'}>О компании</Link>
            <Link onClick={click => click && setOpen(!open)} style={{ textDecoration: 'none', color: '#333333' }} to={'/contact'}>Контакты</Link>
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
          <Link to={'/profile'}>
            <img src={user} alt="" /></Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
