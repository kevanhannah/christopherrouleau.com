import React from 'react';
import { useStore, useToggleCart } from '../../../context/siteContext';
import { PageOverlayStyles } from './Styles';

export default function PageOverlay() {
  const { cartIsOpen } = useStore();
  const toggleCart = useToggleCart();

  return <PageOverlayStyles onClick={toggleCart} isVisible={cartIsOpen} />;
}
