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
  background: var(--primary-yellow);
  padding: 1.25em 1em;
`;

export const CartDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25em;
  border-bottom: 1px solid var(--black);

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
