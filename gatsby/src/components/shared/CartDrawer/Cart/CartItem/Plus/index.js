import React from 'react';
import styled from 'styled-components';

const PlusStyles = styled.svg`
  width: 0.5em;
  height: 0.5em;
  stroke: var(--black);
  stroke-width: 4px;

  &:hover {
    stroke: var(--primary-blue-lighter);
  }
`;

export default function Plus() {
  return (
    <PlusStyles role="presentation" viewBox="0 0 16 16">
      <g fillRule="evenodd" strokeLinecap="square">
        <path d="M8,1 L8,15" />
        <path d="M1,8 L15,8" />
      </g>
    </PlusStyles>
  );
}
