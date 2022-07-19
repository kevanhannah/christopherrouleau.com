import React from 'react';
import styled from 'styled-components';

const CardGroupStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CardGroup({ header, cards, button }) {
  return (
    <CardGroupStyles>
      <h2>{header}</h2>
      {cards}
      {button}
    </CardGroupStyles>
  );
}
