import styled from 'styled-components';

export const CartDrawerStyles = styled.div`
  width: 450px;
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: -450px;
  z-index: 30;
  max-width: 95%;
  transform: ${(props) => (props.cartIsOpen ? 'translate(-450px)' : 'none')};
  transition-duration: 0.45s;
  background: #ffffff;
  padding: 2em 0;
`;

export const CartDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid var(--black);
  padding: 0 1.5em 2em;

  h2 {
    font-size: 1.25em;
  }

  button {
    font-weight: 300;
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.25em;
    }
  }
`;
