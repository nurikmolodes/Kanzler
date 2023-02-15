import React, { useState } from 'react';
import arrow from '../assets/arrow.svg';

const list = [
  {
    text: 'Бумага',
  },
  {
    text: 'Бумага',
  },
  {
    text: 'Бумага',
  },
  {
    text: 'Бумага',
  },
  {
    text: 'Бумага',
  },
  {
    text: 'Бумага',
  },
];

const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <div onClick={() => setIsOpen(!isOpen)} className="defaultMenuCategory">
        <p>Бумага</p>
        <img src={arrow} alt="Arrow" />
      </div>
      {isOpen && (
        <ul className="menuList">
          {list.map((item, i) => (
            <li key={i}>
              <a className="menuCategory" href="*">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdowns;
