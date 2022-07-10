import React from 'react';
import styled from 'styled-components';

const WorkGridStyles = styled.ul`
  --columns: 3;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));

  @media (max-width: 800px) {
    --columns: 2;
  }

  @media (max-width: 400px) {
    --columns: 1;
    justify-items: center;
  }
`;

export default function WorkGrid({ children }) {
  return <WorkGridStyles>{children}</WorkGridStyles>;
}
