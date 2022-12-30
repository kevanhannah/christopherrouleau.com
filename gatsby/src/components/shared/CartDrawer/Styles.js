import styled from 'styled-components';

export const CartDrawerStyles = styled.div`
  width: 450px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: -450px;
  z-index: 30;
  max-width: 95%;
  transform: ${(props) => (props.cartIsOpen ? 'translate(-450px)' : 'none')};
  transition-duration: 0.45s;
  background: #ffffff;
`;

export const CartDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--black);
  padding: 2em 1.5em;

  h2 {
    font-size: 1.25em;
  }
`;

export const CloseCartButton = styled.button`
  font-weight: 300;
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.25px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }
`;
