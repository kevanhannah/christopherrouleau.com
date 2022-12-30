import React from 'react';
import { StoreContextProvider, useStore } from './src/context/siteContext';
import GlobalStyles from './src/components/shared/GlobalStyles';
import Typography from './src/components/shared/Typography';
import Layout from './src/components/shared/Layout';

function PageWrapper({ element }) {
  const { cartIsOpen } = useStore();

  return (
    <>
      <GlobalStyles noScroll={cartIsOpen} />
      <Typography />
      <Layout>{element}</Layout>
    </>
  );
}

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({ lang: 'en-ca' });
}

export function wrapPageElement({ element, props }) {
  if (props.location.pathname === '/') {
    return;
  }

  return <PageWrapper element={element} />;
}

export function wrapRootElement({ element }) {
  return <StoreContextProvider>{element}</StoreContextProvider>;
}
