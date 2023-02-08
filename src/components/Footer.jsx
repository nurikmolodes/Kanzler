import React from "react";
import number from "../assets/number.svg";
import num from "../assets/num.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import logo from "../assets/logo.svg";
import emblema from "../assets/emblema.svg";
import redLine from "../assets/redLine.svg";
import grey from "../assets/grey.svg";
import burger from "../assets/burger.svg";
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <img src={emblema} alt="" />
        <img src={redLine} alt="" />
      </div>
      <div className="bottom">
        <div>
          <a className="bold">Меню</a>
          <a>Каталог</a>
          <a>Акции</a>
          <a>Популярные товары</a>
          <a>Новинки</a>
          <a>Новости</a>
          <a>О компании</a>
          <a>Контакты</a>
          <div className="gray">
            <img src={grey} alt="" />
            <img src={burger} alt="" />
          </div>
        </div>
        <div>
          <a className="bold">Категории</a>
          <a>Бумага</a>
          <a>Письмо и графика</a>
          <a>Канц товары</a>
          <a>Художественные товары</a>
          <a>Творчество</a>
          <a>Полиграфические материалы</a>
          <a>Распродажи</a>
          <a>Офисное оборудование</a>
          <a>Игры и игрушки</a>
          <a>Сувенирная продукция</a>
        </div>
        <div>
          <a className="bold">Контакты</a>
          <a className="boldd">Огонбаева, 222</a>
          <a>
            <img src={number} alt="" />
          </a>
          <a>
            <img src={num} alt="" />
          </a>
          <a className="boldd">Эркиндик, 7</a>
          <a>
            <img src={number} alt="" />
          </a>
          <a>
            <img src={num} alt="" />
          </a>
          <a className="boldd">Уметалиева, 84</a>
          <a>
            <img src={number} alt="" />
          </a>
          <a>
            <img src={num} alt="" />
          </a>
        </div>
        <div>
          <a className="bold">Мы в соц сетях</a>
          <a className="bold">
            <img src={instagram} alt="" />
          </a>
          <a className="bold">
            <img src={facebook} alt="" />
          </a>
          <a className="bold">
            <img src={whatsapp} alt="" />
          </a>
          <a style={{ marginTop: "110px" }} className="bold">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
      <hr className="theVeryBottom" />
      <div className="center">
        <h5 className="theVeryBottomText">
          Kanzler & Burger (c) 2017. All rights reserved
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
