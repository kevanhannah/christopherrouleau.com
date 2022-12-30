import React from 'react';
import { useCartItems, useCartTotals } from '../../../../context/siteContext';
import CartItem from './CartItem';
import CheckoutSection from './CheckoutSection';
import { CartStyles, EmptyCartStyles, CartItemList } from './Styles';

export default function Cart() {
  const lineItems = useCartItems();
  const { total } = useCartTotals();

  return (
    <CartStyles>
      {lineItems.length > 0 ? (
        <>
          <CartItemList>
            {lineItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </CartItemList>
          <CheckoutSection total={total} />
        </>
      ) : (
        <EmptyCartStyles>
          <p>Your cart is empty.</p>
        </EmptyCartStyles>
      )}
    </CartStyles>
  );
}
