import styled from 'styled-components';

export const CheckoutSectionStyles = styled.div`
  padding: 1em 1.5em 2em;
  border-top: 2px solid var(--black);
  background: #ffffff;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.25em;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25em;
    font-weight: 400;
    margin: 0;
  }
`;

export const FinePrint = styled.p`
  font-size: 0.75em;
  font-weight: 300;
  margin: 0;
`;
