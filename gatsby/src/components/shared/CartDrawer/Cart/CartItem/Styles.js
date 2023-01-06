import styled from 'styled-components';

export const CartItemStyles = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  gap: 1em;
  padding: 2em 0;
  margin: 0 2em;
  border-bottom: 1px solid var(--black);

  &:last-of-type {
    border-bottom: none;
  }

  h4 {
    font-size: 0.75em;
  }

  p {
    font-size: 0.75em;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const CartItemImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  display: block;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25em;
`;

export const CartOptionsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  margin-top: 0.5em;
`;

export const QuantitySelectorStyles = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--black-lightest);
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
`;

export const QuantityDisplay = styled.span`
  display: block;
  width: 2em;
  padding: 0.5em;
  line-height: 1;
  text-align: center;
`;

export const RemoveButton = styled.button`
  font-weight: 300;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25em;
  border-radius: 4px;
  user-select: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--primary-yellow);
  }
`;
