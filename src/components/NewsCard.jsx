import React from 'react';
import newsImage from '../assets/newsImage.png';
import moreInfo from '../assets/moreNews.svg';
import '../styles/NewsCard.scss';
import { Link } from 'react-router-dom';

const NewsCard = () => {
  return (
    <div className="newsCard">
      <div className="newsImage">
        <img src={newsImage} alt="" />
      </div>
      <p className="newsInfo">
        Lorem ipsum dolor sit amet consectetur. In integer ultricies suscipit dui nulla quam. Ligula
        tempor placerat velit lectus tempus est nisi morbi. Pharetra lectus turpis eget curabitur
        arcu elementum.
      </p>
      <div className="moreNews">
        <b>Читать больше</b>
        <Link style={{ textDecoration: 'none', color: '#000' }} to={`/news/1`}>
          <img src={moreInfo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
