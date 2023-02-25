import React, { useState } from 'react';
import '../styles/Sort.scss';
import arrow from '../assets/arrow.svg';

const Sort = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="sort">
      <div onClick={() => setSelected(!selected)} className="defaultSort">
        <p>Сначала новые</p>
        <img src={arrow} alt="Arrow" />
      </div>
      {selected && (
        <ul className="sortList">
          <li>старые</li>
          <li>популярные</li>
          <li>дешевые</li>
          <li>дорогие</li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
