import React from 'react';
import Banner from '../Banner';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutStyles } from './Styles';
import CartDrawer from '../CartDrawer';
import PageOverlay from '../PageOverlay';

export default function Layout({ children }) {
  return (
    <>
      <CartDrawer />
      <PageOverlay />
      <Banner />
      <LayoutStyles>
        <Header />
        {children}
      </LayoutStyles>
      <Footer />
    </>
  );
}
