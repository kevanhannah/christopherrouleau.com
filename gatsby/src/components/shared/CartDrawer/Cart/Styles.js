import styled from 'styled-components';

export const CartStyles = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CartItemList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
`;

export const EmptyCartStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: 1em;
    font-weight: 400;
  }
`;
