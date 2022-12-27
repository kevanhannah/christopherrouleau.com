import styled from 'styled-components';

export const PageOverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? 0.25 : 0)};
  background: var(--black);
  -webkit-transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
