import React, { useState } from 'react';
import {
  useRemoveItemFromCart,
  useUpdateItemsFromCart,
} from '../../../../../context/siteContext';
import IncrementButton from './IncrementButton';
import Minus from './Minus';
import Plus from './Plus';
import {
  CartItemImage,
  CartItemInfo,
  CartItemStyles,
  CartOptionsRow,
  QuantityDisplay,
  QuantitySelectorStyles,
  RemoveButton,
} from './Styles';

export default function CartItem({ item }) {
  console.log(item);
  const removeItemFromCart = useRemoveItemFromCart();
  const updateItemsFromCart = useUpdateItemsFromCart();
  const [stateQuantity, setQuantity] = useState(item.quantity);
  const updateQuantity = (qty) => {
    updateItemsFromCart({ id: item.id, quantity: qty });
    setQuantity(qty);
  };

  return (
    <CartItemStyles>
      <CartItemImage src={item.variant.image.src} alt={item.title} />
      <CartItemInfo>
        <h4>{item.title}</h4>
        <p>{item.variant.title}</p>
        <p>
          {new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: item.variant.price.currencyCode,
          }).format(item.variant.price.amount)}
        </p>
        <CartOptionsRow>
          <QuantitySelectorStyles>
            <IncrementButton
              aria-label="decrease quantity"
              onClick={() =>
                stateQuantity === 1
                  ? removeItemFromCart(item.id)
                  : updateQuantity(stateQuantity - 1)
              }
            >
              <Minus />
            </IncrementButton>
            <QuantityDisplay>{item.quantity}</QuantityDisplay>
            <IncrementButton
              aria-label="increase quantity"
              onClick={() => updateQuantity(stateQuantity + 1)}
            >
              <Plus />
            </IncrementButton>
          </QuantitySelectorStyles>
          <RemoveButton
            type="button"
            onClick={() => removeItemFromCart(item.id)}
          >
            Remove
          </RemoveButton>
        </CartOptionsRow>
      </CartItemInfo>
    </CartItemStyles>
  );
}
