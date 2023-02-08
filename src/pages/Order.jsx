import React, { useState } from "react";
import vector from "../assets/vector.svg";
import { data } from "../assets/data";
import deleted from "../assets/delete.svg";
import "../styles/Order.scss";

const Order = ({ cart, setCart, filteredCart, setSearchh }) => {
  //   REMOVING ITEM
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.name !== id);
    setCart(arr);
  };

  //   TOTAL PRICE
  const totalPrice = cart.reduce(
    (price, item) => price + item.amount * item.price,
    0
  );
  // INCREASE THE AMOUNT
  const AddToCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, amount: ProductExist.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };
  //   DECREASE THE AMOUNT
  const RemoveFromCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.amount === 1) {
      setCart(cart.filter((item) => item.id === product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.amount - 1 }
            : item
        )
      );
    }
  };
  //   DROP DOWN
  const [opened, setOpened] = useState(true);
  let down = opened ? "cartImage" : "reverse";

  return (
    <div className="wrapper">
      {/* LINKS  */}
      <div className="links">
        <a>Главная/</a>
        <a>Корзина/</a>
        <a>Оформление заказа/</a>
      </div>

      {/* BIG TEXT  */}
      <div className="big-text">
        <h1>Оформление заказа</h1>
      </div>

      {/* CART  */}
      <div className="cartt">
        <div className="left">
          <div className="korzina">
            <h2>Корзина({data.length})</h2>
            <img
              className={down}
              onClick={() => setOpened(!opened)}
              src={vector}
              alt=""
            />
          </div>
          <div className="list">
            <ul>
              <li>Фото</li>
              <li>Название</li>
            </ul>
            <ul>
              <li>Артикул</li>
              <li>Кол-во</li>
              <li>Цена</li>
            </ul>
          </div>
          <div className="line"></div>
          {opened && (
            <div className="goods">
              {filteredCart.map((item, index) => (
                <div key={item.id}>
                  <div className="good">
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.articul}</p>
                    <div className="buttons">
                      <p onClick={() => RemoveFromCart(item)}>-</p>
                      <p>{item.amount}</p>
                      <p onClick={() => AddToCart(item)}>+</p>
                    </div>
                    <h2>{Number(item.price * item.amount)} с</h2>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(item.name)}
                      src={deleted}
                      alt=""
                    />
                  </div>
                  <div className="linee"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="right">
          <h2 className="order">Стоимость заказа</h2>
          <div className="first">
            <h3>Товары({data.length})</h3>
            <h2>{totalPrice}c</h2>
          </div>
          <div className="second">
            <h3>Доставка</h3>
            <h2>Бесплатно</h2>
          </div>
          <div className="liner"></div>
          <div className="third">
            <h3>Итого</h3>
            <h2>{totalPrice}c</h2>
          </div>
          <button>Потвердить заказ</button>
          <p>
            Подтверждая заказ, я принимаю условия{" "}
            <span>пользовательского соглашения</span>
          </p>
        </div>
      </div>

      {/* BIG TEXT */}
      <div className="bigText">
        <h1>Оформление заказа</h1>
      </div>

      {/* FORM  */}
      <form>
        <div className="levoe">
          <input
            className="first"
            type="text"
            placeholder="Имя"
            style={{ border: "none" }}
          />
          <div className="second">
            <input
              className="one"
              type="text"
              placeholder="Телефон"
              style={{ border: "none" }}
            />
            <input
              className="two"
              type="text"
              placeholder="Доб."
              style={{ border: "none" }}
            />
          </div>
          <input
            className="third"
            type="text"
            placeholder="Доп телефон или whatsapp"
            style={{ border: "none" }}
          />
        </div>
        <div className="pravoe">
          <input
            className="first"
            type="text"
            placeholder="Фамилия"
            style={{ border: "none" }}
          />
          <input
            className="second"
            type="text"
            placeholder="E-mail"
            style={{ border: "none" }}
          />
        </div>
      </form>

      {/* CHECKBOX  */}
      <div className="checkbox">
        <h3>Я</h3>
        <div>
          <input type="checkbox" className="check" />
          <p>Физическое лицо</p>
        </div>
        <div>
          <input type="checkbox" className="check" />
          <p>Юридическое лицо</p>
        </div>
      </div>

      {/* DOSTAVKA  */}
      <div className="dostavka">
        <h2>Доставка</h2>
        <div className="way-dostavka">
          <h2>Способ доставки</h2>
          <div>
            <input type="checkbox" className="check" />
            <p>
              Самовызов <span>режим работы магазина {">"}</span>
            </p>
          </div>
          <div>
            <input type="checkbox" className="check" />
            <p>
              Курьерская доставка <span>условия доставки {">"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ADDRESS  */}
      <div className="address">
        <h4>Адрес доставки</h4>
        <div className="shipping">
          <input type="text" placeholder="Страна" style={{ border: "none" }} />
          <input type="text" placeholder="Улица" style={{ border: "none" }} />
          <input type="text" placeholder="Дом" style={{ border: "none" }} />
          <input type="text" placeholder="Город" style={{ border: "none" }} />
          <input
            type="text"
            placeholder="Квартира"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* COMMENT  */}
      <div className="comment">
        <p>Указать домофон, этаж, подъезд и комментарий к адресу</p>
        <input type="text" placeholder="Комментарий" />
      </div>
    </div>
  );
};

export default Order;
