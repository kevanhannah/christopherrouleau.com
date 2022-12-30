import React from 'react';
import styled from 'styled-components';

const IncrementButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.75em;
  user-select: none;
`;

export default function IncrementButton({ children, ...props }) {
  return (
    <IncrementButtonStyles {...props} type="button">
      {children}
    </IncrementButtonStyles>
  );
}
