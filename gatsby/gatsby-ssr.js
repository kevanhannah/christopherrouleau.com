import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  if (props.location.pathname === '/') {
    return;
  }

  return <Layout {...props}>{element}</Layout>;
}
