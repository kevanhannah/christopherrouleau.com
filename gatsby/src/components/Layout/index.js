import React from 'react';
import styled from 'styled-components';
import Banner from '../shared/Banner';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const LayoutStyles = styled.div`
  margin: 0 auto;
  max-width: 970px;
`;

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
