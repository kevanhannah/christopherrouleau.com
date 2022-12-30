import React from 'react';
import styled from 'styled-components';

const MinusStyles = styled.svg`
  width: 0.5em;
  height: 0.5em;
  stroke: var(--black);
  stroke-width: 4px;

  &:hover {
    stroke: var(--primary-blue-lighter);
  }
`;

export default function Minus() {
  return (
    <MinusStyles role="presentation" viewBox="0 0 16 2">
      <path d="M1,1 L15,1" fillRule="evenodd" strokeLinecap="square" />
    </MinusStyles>
  );
}
