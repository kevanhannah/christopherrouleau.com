import React, { Fragment } from 'react';
import { useCartItems } from '../../../../context/siteContext';
import { CartStyles, EmptyCartStyles } from './Styles';

export default function Cart() {
  const lineItems = useCartItems();

  return (
    <CartStyles>
      {lineItems.length > 0 ? (
        <div>
          {lineItems.map((item) => (
            <Fragment key={item.id + item.quantity}>
              {/* <div {...item} /> */}
              <p>Item!</p>
            </Fragment>
          ))}
        </div>
      ) : (
        <EmptyCartStyles>
          <p>Your cart is empty.</p>
        </EmptyCartStyles>
      )}
    </CartStyles>
  );
}
