import React from 'react';
import { useCheckout } from '../../../../../context/siteContext';
import { ExternalPrimaryButton } from '../../../Buttons/Styles';
import { CheckoutSectionStyles, FinePrint, SubtotalRow } from './Styles';

export default function CheckoutSection({ total }) {
  const openCheckout = useCheckout();

  return (
    <CheckoutSectionStyles>
      <div>
        <SubtotalRow>
          <h3>Subtotal</h3>
          <p>
            {new Intl.NumberFormat('en-CA', {
              style: 'currency',
              currency: 'CAD',
            }).format(total)}
          </p>
        </SubtotalRow>
        <FinePrint>
          Shipping, taxes, and discounts calculated at checkout.
        </FinePrint>
      </div>
      <ExternalPrimaryButton onClick={openCheckout} type="submit">
        Checkout
      </ExternalPrimaryButton>
    </CheckoutSectionStyles>
  );
}
