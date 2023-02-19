import product from '../assets/product.png';
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import addCart from '../assets/addCart.svg';
import '../styles/Card.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <Link style={{ textDecoration: 'none', color: '#000' }} to={`/product/1`}>
      <div className="card">
        <div className="cardImage">
          <img src={product} alt="Product" />
        </div>
        <h5>В наличии</h5>
        <p>Lorem ipsum dolor sit amet consectetur. ipsum d sit amet...</p>
        <b>240 c</b>
        <div
          style={{
            display: 'flex',
            gap: '44px',
            alignItems: 'center',
            width: '182px',
            marginTop: '10px',
          }}>
          <div className="counter">
            <img onClick={() => setCount(count > 0 ? count - 1 : 0)} src={minus} alt="" />
            <div className="count">{count}</div>
            <img onClick={() => setCount((count) => count + 1)} src={plus} alt="" />
          </div>
          <div className="addCart">
            <span style={{ cursor: 'pointer' }}>
              в корзину
              <img src={addCart} alt="" />
            </span>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
