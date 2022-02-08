import { useContext } from 'react';
import AppContext from '../context/AppContext';

import OrderItem from '../components/OrderItem';

import IconArrow from '../assets/icons/flechita.svg';

import '../styles/MyOrder.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={ IconArrow } alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        { state.cart.map(product => (
          <OrderItem product={ product } key={ `orderItem-${product.id}` } />
        )) }
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${ sumTotal() }</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default MyOrder;