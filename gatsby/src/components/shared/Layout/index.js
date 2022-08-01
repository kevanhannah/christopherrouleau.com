import React from 'react';
import Banner from '../Banner';
import Header from '../Header';
import Footer from '../Footer';
import { LayoutStyles } from './Styles';

export default function Layout({ children }) {
  return (
    <>
      <Banner />
      <LayoutStyles>
        <Header />
        {children}
      </LayoutStyles>
      <Footer />
    </>
  );
}
