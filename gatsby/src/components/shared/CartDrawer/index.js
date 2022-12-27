import React from 'react';
import { useStore, useToggleCart } from '../../../context/siteContext';
import Cart from './Cart';
import { CartDrawerHeader, CartDrawerStyles } from './Styles';

export default function CartDrawer() {
  const { cartIsOpen } = useStore();
  const toggleCart = useToggleCart();

  return (
    <CartDrawerStyles cartIsOpen={cartIsOpen}>
      <CartDrawerHeader>
        <h2>Your cart</h2>
        <button onClick={toggleCart} type="button">
          Close
        </button>
      </CartDrawerHeader>
      <Cart />
    </CartDrawerStyles>
  );
}
