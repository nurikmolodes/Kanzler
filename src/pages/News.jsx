import React from 'react';
import Sort from '../components/Sort';
import '../styles/News.scss';
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="newsContainer">
      <div className="newsPageRouteHistory">
        <div>
          <a href="">Главная </a>/<a href=""> Новость </a>
        </div>
      </div>
      <Sort />
      <div className="newsCards">
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item, i) => (
          <NewsCard />
        ))}
      </div>
    </div>
  );
};

export default News;
