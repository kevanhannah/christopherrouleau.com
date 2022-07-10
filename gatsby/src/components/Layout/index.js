import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';

const LayoutStyles = styled.div`
  margin: 0 auto;
  max-width: 970px;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Banner />
      <LayoutStyles>
        <Header />
        {children}
      </LayoutStyles>
      <Footer />
    </>
  );
}
