import React from 'react';
import '../styles/News.scss';
import newsImg from '../assets/a.png';

const News = () => {
  return (
    <div className="container">
      <div className="newsRouteHistory">
        <div>
          <a href="">Главная </a>/<a href=""> Новость </a>
        </div>
      </div>
      <div className="news">
        <div className="newsImg">
          <img src={newsImg} alt="" />
        </div>
        <div className="newsDetails">
          <h1>Приходите на мастер-классы делать подарки в наших магазинах!</h1>
          <div className="date">16.12.2022</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in
            lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor
            eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec
            eget molestie ornare lorem mattis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in
            lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor
            eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec
            eget molestie ornare lorem mattis.
          </p>
          <div className="newsImages">
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Mollis massa commodo aliquam quisque at in
            lorem. Nisl dolor consectetur at pulvinar. Morbi elit mi neque sed scelerisque tortor
            eget volutpat. Eu ridiculus ullamcorper libero congue. Massa a adipiscing blandit donec
            eget molestie ornare lorem mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
