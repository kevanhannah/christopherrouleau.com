import { createGlobalStyle } from 'styled-components';
import '../../../assets/fonts/font.css';

const Typography = createGlobalStyle`
  html {
    font-family: Basecoat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 1.6em;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  p, li {
    font-family: Basecoat;
    font-weight: 300;
    font-size: 1em;
    margin-bottom: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
}

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
    font-size: 1.6em;
  }

  h3 {
    font-size: 1em;
  }

  strong {
    font-weight: 700;
  }
`;

export default Typography;
