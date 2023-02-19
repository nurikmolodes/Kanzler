import React, { useEffect, useState } from "react";
import "../styles/ProductDetails.scss";
import slide from "../assets/slide.png";
import addCart from "../assets/white-cart.svg";
import arrow from "../assets/arrow.svg";
import sliderArrow from "../assets/sliderArrow.svg";
import Card from "../components/Card";

const imgs = [
  {
    url: "https://paper.kg/wp-content/uploads/2020/10/images-3.jpg",
  },
  {
    url: slide,
  },
  {
    url: "https://i.pinimg.com/originals/a8/a6/bb/a8a6bbef6e1ae0bf486ad88950439089.jpg",
  },
  {
    url: "https://iheartcraftythings.com/wp-content/uploads/2021/05/Pencil-DRAWING-%E2%80%93-STEP-9.jpg",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pencils_hb.jpg",
  },
];

const ProductDetails = () => {
  const [number, setNumber] = useState(0);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div className="container">
      <div className="first">
        <div className="routeHistory">
          <div>
            <a href=""> Главная </a>/<a href=""> Каталог </a>/
            <a href=""> Письмо и графика</a>/<a href=""> Ручки</a>/
            <a href="">товар 43223</a>
          </div>
        </div>
      </div>
      <div className="secondd">
        <div className="containerSlider">
          <div className="slider">
            {imgs.map((item, i) => (
              <div className="sliderImages">
                <img
                  key={i}
                  onClick={() => setNumber(i)}
                  src={item.url}
                  alt="Product"
                />
              </div>
            ))}
          </div>
          <div className="slide">
            <img
              className="slideToLeft"
              src={sliderArrow}
              alt=""
              onClick={() => setNumber(number <= 0 ? number : number - 1)}
            />
            <img src={imgs[number].url} alt="" />
            <img
              onClick={() => setNumber(number >= limit ? number : number + 1)}
              className="slideToRight"
              src={sliderArrow}
              alt=""
            />
          </div>
        </div>
        <div className="productDetails">
          <div className="back">
            {" "}
            <img src={arrow} alt="" /> Назад
          </div>
          <h3 className="productTitle">
            e-motion Pure Black fountain pen, M, black
          </h3>
          <div className="details">
            <h5>Описание</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mollis massa commodo
              aliquam quisque at in lorem. Nisl dolor consectetur at pulvinar.
              Morbi elit mi neque sed scelerisque tortor eget volutpat. Eu
              ridiculus ullamcorper libero congue. Massa a adipiscing blandit
              donec eget molestie ornare lorem mattis.
            </p>
          </div>
          <span className="price">
            <b>245 c</b>
            <p>В наличие</p>
          </span>
          <button className="addToCart">
            в козину
            <img src={addCart} alt="" />
          </button>
        </div>
      </div>
      <div className="third">
        <div className="features">
          <div className="featuresTitle">
            <p>Характеристики</p>
          </div>
          <div className="featuresDetails">
            <ul className="feature">
              <li>Бренд</li>
              <li>Страна происхождения</li>
              <li>Назначение</li>
              <li>Техника</li>
              <li>Тип товара</li>
              <li>Размер, мм</li>
            </ul>
            <ul className="value">
              <li>Бренд</li>
              <li>Германия</li>
              <li>для декорирования</li>
              <li>Акрил</li>
              <li>Маркер</li>
              <li>1.2</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="fourthTitle">С этим товаром покупают</div>
        <div style={{ maxWidth: "1290px", margin: "auto" }}>
          <div className="cardds">
            {Array.from([1, 2, 3, 4, 5]).map((item, i) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
