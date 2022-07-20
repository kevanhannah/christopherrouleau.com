import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import Header from '../Header';
import Footer from '../Footer';

const LayoutStyles = styled.div`
  margin: 0 auto;
  max-width: 60.75em;
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
