import React, { useState } from "react";
import "../styles/Catalog.scss";
import arrow from "../assets/arrow.svg";
import banner from "../assets/banner.png";
import Dropdowns from "../components/Dropdowns";
import Sort from "../components/Sort";
import Card from "../components/Card";

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <div className="container">
      <div className="first">
        <div className="routeHistory">
          <div>
            <a href="">Главная </a>/<a href=""> Каталог </a>/
            <a href=""> Письмо и графика</a>
          </div>
        </div>
        <div className="categories">
          <ul>
            <li>
              <a className="category" href="*">
                Ручки
              </a>
            </li>
            <li>
              <a className="category" href="*">
                Карандаши
              </a>
            </li>
            <li>
              <a className="category" href="*">
                Кисти
              </a>
            </li>
            <li>
              <a className="category" href="*">
                Наборы
              </a>
            </li>
            <li>
              <a className="category" href="*">
                Маркеры
              </a>
            </li>
            <li>
              <a className="category" href="*">
                Фломастеры
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div onClick={() => setOpen(!open)} className="defaultCategory">
            <p>Категория...</p>
            <img src={arrow} alt="Arrow" />
          </div>
          {open && (
            <ul className="list">
              <li>
                <a className="listCategory" href="*">
                  Ручки
                </a>
              </li>
              <li>
                <a className="listCategory" href="*">
                  Карандаши
                </a>
              </li>
              <li>
                <a className="listCategory" href="*">
                  Кисти
                </a>
              </li>
              <li>
                <a className="listCategory" href="*">
                  Наборы
                </a>
              </li>
              <li>
                <a className="listCategory" href="*">
                  Маркеры
                </a>
              </li>
              <li>
                <a className="listCategory" href="*">
                  Фломастеры
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="second">
        <div className="bannerr">
          {/* <button>подробнее</button> */}
          <img src={banner} alt="Bannerr" />
        </div>
        <div className="flex">
          <div className="dropdowns">
            {Array.from([1, 2, 3, 4, 5, 6, 7]).map((item, i) => (
              <Dropdowns key={i} />
            ))}
          </div>
          <div className="dropdownxBody">
            <div onClick={() => setOpened(!opened)} className="dropdownxTitle">
              <p>Выбрать</p>
              <img src={arrow} alt="Arrow" />
            </div>
            {opened && (
              <div className="dropdownx">
                {Array.from([1, 2, 3, 4, 5, 6, 7]).map((item, i) => (
                  <Dropdowns key={i} />
                ))}
              </div>
            )}
          </div>
          <div className="banner">
            {/* <button>подробнее</button> */}
            <img src={banner} alt="Banner" />
          </div>
        </div>
        <div className="products">
          <div className="productsCategory">
            <h2>Письмо и графика</h2>
            <div className="flexx">
              <p>142 товара(-ов)</p>
              <Sort />
            </div>
          </div>
          <div style={{ maxWidth: "954px" }}>
            <div className="cards">
              {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item, i) => (
                <Card />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
