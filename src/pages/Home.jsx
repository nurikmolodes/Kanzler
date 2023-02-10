import React, { useRef } from "react";
import "../styles/Home.scss";
import toCatalog from "../assets/toCatalog.svg";
import redPen from "../assets/redPen.svg";
import whitePen from "../assets/whitePen.svg";
import call from "../assets/calling.svg";
import linear from "../assets/linear.svg";
import { Link } from "react-router-dom";
import cut from "../assets/cut.svg";
import logoKanzler from "../assets/logoKanzler.svg";
import burger from "../assets/burger.svg";
import pismoGraph from "../assets/pismoGraphica.svg";
import pismoGraph1 from "../assets/pismoGraphica1.svg";
import kansTovar from "../assets/kansTovar.svg";
import hudozh from "../assets/hudozh.svg";
import art from "../assets/art.svg";
import poligraph from "../assets/poligraph.svg";
import office from "../assets/office.svg";
import games from "../assets/games.svg";
import discounts from "../assets/discounts.svg";
import gift from "../assets/gift.svg";
import insidePoligraph from "../assets/insidePoligraph.svg";
import insideGame from "../assets/insideGame.svg";
import insideGift from "../assets/insideGift.svg";
import insideDiscounts from "../assets/insideDiscounts.svg";
import line50 from "../assets/line50.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import i from "../assets/i.png";
import { Navigation } from "swiper";
import "swiper/scss/navigation";
import leftNav from "../assets/rightNav.svg";
import rightNav from "../assets/rightNav.svg";
import { useMediaQuery } from "react-responsive";
import { data } from "../assets/data";
import addToCart from "../assets/addToCart.svg";
import nav from "../assets/nav.svg";
import newsImage from "../assets/newsImage.svg";
import regime from "../assets/regime.svg";
import ogonbaeva from "../assets/ogonbaeva.svg";
import erkindik from "../assets/erkindik.svg";
import umetalieva from "../assets/umetalieva.svg";
import _line from '../assets/_line.svg'

const Home = () => {
  // REF SLIDER
  const swiperRef = useRef();
  const swiperRe = useRef();
  const swiperRee = useRef();
  const swiperR = useRef();
  // RESPONSIVENESS THROUGH USEMEDIAQUERY
  const bigScreen = useMediaQuery({ query: "(max-width: 1440px)" });
  return (
    <div className="wrapper">
      {/* HEADER  */}
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

      {/* CATEGORIES  */}
      <div className="categories">
        <div className="pointer">
          <h1>Категории</h1>
          <img src={line50} />
        </div>
        <div className="box">
          <div className="category">
            <img style={{ width: "111px", marginTop: "25px" }} src={cut} />
            <img style={{ width: "82px" }} src={logoKanzler} />
            <img style={{ width: "111px" }} src={cut} />
            <p>Kanzler</p>
          </div>
          <div className="category">
            <img style={{ width: "111px", marginTop: "25px" }} src={cut} />
            <img style={{ width: "82px" }} src={burger} />
            <img style={{ width: "111px" }} src={cut} />
            <p>Bürger</p>
          </div>
          <div className="category">
            <img src={pismoGraph} />
          </div>
          <div className="category">
            <img src={pismoGraph1} />
          </div>
          <div className="category">
            <img src={kansTovar} />
          </div>
          <div className="category">
            <img src={hudozh} />
          </div>
          <div className="category">
            <img src={art} />
          </div>
          <div className="category">
            <img src={poligraph} />
            <img
              style={{ position: "absolute", top: "45px" }}
              src={insidePoligraph}
            />
          </div>
          <div className="category">
            <img src={office} />
          </div>
          <div className="category">
            <img src={games} />
            <img
              style={{ position: "absolute", top: "45px" }}
              src={insideGame}
            />
          </div>
          <div className="category">
            <img src={gift} />
            <img
              style={{ position: "absolute", top: "45px" }}
              src={insideGift}
            />
          </div>
          <div className="category">
            <img src={discounts} />
            <img
              style={{ position: "absolute", top: "45px" }}
              src={insideDiscounts}
            />
          </div>
        </div>
      </div>

      {/* DISCOUNTS  */}
      <div className="discounts">
        <div className="pointer">
          <h1>Акции</h1>
          <img src={line50} />
        </div>
        <div className="ads" style={bigScreen ? { width: "500px" } : null}>
          <div
            className="leftNav"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={leftNav} />
          </div>
          <Swiper
            className="images-ads"
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={5}
            slidesPerView={bigScreen ? 1 : 5}
            speed={800}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={a} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={b} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={c} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={d} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={i} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={a} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={b} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={c} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={d} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={i} />
            </SwiperSlide>
          </Swiper>
          <div
            className="rightNav"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={rightNav} />
          </div>
        </div>
      </div>

      {/* POPULAR ONES  */}
      <div className="popular">
        <div className="pointer">
          <h1>Популярные товары</h1>
          <img src={line50} />
        </div>
        <div className="popular-goods">
          <div
            className="leftNav"
            onClick={() => swiperRe.current?.slidePrev()}
          >
            <img src={leftNav} />
          </div>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRe.current = swiper;
            }}
            spaceBetween={5}
            slidesPerView={bigScreen ? 1 : 5}
            speed={800}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((i) => (
              <SwiperSlide>
                <div className="good" key={i.id}>
                  <img src={i.img} />
                  <div>
                    <h5>В наличии</h5>
                    <p>{i.name}</p>
                    <h2>{i.price} с</h2>
                  </div>
                  <div className="button">
                    <div className="oye">
                      <h4>-</h4>
                      <h4>{i.amount}</h4>
                      <h4>+</h4>
                    </div>
                    <img src={addToCart} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="rightNav"
            onClick={() => swiperRe.current?.slideNext()}
          >
            <img src={rightNav} />
          </div>
        </div>
      </div>

      {/* АКЦИОННЫЕ ТОВАРЫ  */}
      <div className="popular">
        <div className="pointer">
          <h1>Акционные товары</h1>
          <img src={line50} />
        </div>
        <div className="popular-goods">
          <div
            className="leftNav"
            onClick={() => swiperRee.current?.slidePrev()}
          >
            <img src={leftNav} />
          </div>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRee.current = swiper;
            }}
            spaceBetween={5}
            slidesPerView={bigScreen ? 1 : 5}
            speed={800}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((i) => (
              <SwiperSlide>
                <div className="good" key={i.id}>
                  <img src={i.img} />
                  <div>
                    <h5>В наличии</h5>
                    <p>{i.name}</p>
                    <h2>{i.price} с</h2>
                  </div>
                  <div className="button">
                    <div className="oye">
                      <h4>-</h4>
                      <h4>{i.amount}</h4>
                      <h4>+</h4>
                    </div>
                    <img src={addToCart} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="rightNav"
            onClick={() => swiperRee.current?.slideNext()}
          >
            <img src={rightNav} />
          </div>
        </div>
      </div>

      {/* COMPANY NEWS  */}
      <div className="company-news">
        <h1>Новости компании</h1>
        <div className="news">
          <div className="leftNav" onClick={() => swiperR.current?.slidePrev()}>
            <img src={leftNav} />
          </div>
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperR.current = swiper;
            }}
            slidesPerView={bigScreen ? 1 : 3}
            speed={800}
            spaceBetween={10}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="new">
                <img src={newsImage} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <div className="link">
                  <h3>Читать больше</h3>
                  <img src={nav} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new">
                <img src={newsImage} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <div className="link">
                  <h3>Читать больше</h3>
                  <img src={nav} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new">
                <img src={newsImage} />
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <div className="link">
                  <h3>Читать больше</h3>
                  <img src={nav} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new">
                <img src={newsImage} />
                <p>
                  Lorem ipsum dolor sit amet consectetur. In integer ultricies
                  suscipit dui nulla quam. Ligula tempor placerat velit lectus
                  tempus est nisi morbi. Pharetra lectus turpis eget curabitur
                  arcu elementum.
                </p>
                <div className="link">
                  <h3>Читать больше</h3>
                  <img src={nav} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="new">
                <img src={newsImage} />
                <p>
                  Lorem ipsum dolor sit amet consectetur. In integer ultricies
                  suscipit dui nulla quam. Ligula tempor placerat velit lectus
                  tempus est nisi morbi. Pharetra lectus turpis eget curabitur
                  arcu elementum.
                </p>
                <div className="link">
                  <h3>Читать больше</h3>
                  <img src={nav} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            className="rightNav"
            onClick={() => swiperR.current?.slideNext()}
          >
            <img src={rightNav} />
          </div>
        </div>
      </div>

      {/* ФИЛИАЛЫ  */}
      <div className="filials">
        <div className="pointer">
          <h1>Филиалы</h1>
          <img src={line50} />
        </div>
        <div style={{ display: "flex" }} className="last-two">
          <div className="contacts">
            <img src={regime} />
            <img src={_line} className="_line" />
            <img src={ogonbaeva} />
            <img src={_line} className="_line" />
            <img src={erkindik} />
            <img src={_line} className="_line" />
            <img src={umetalieva} />
            <img src={_line} className="_line" />
          </div>
          <div className="map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="1137"
                  height="484"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Kyrgyzstan улица Атая Огонбаева, 222&t=&z=18&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
