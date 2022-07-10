import { createGlobalStyle } from 'styled-components';

import basecoat from '../../../assets/fonts/basecoat.otf';
import basecoatLight from '../../../assets/fonts/basecoat-light.otf';
import basecoatBold from '../../../assets/fonts/basecoat-bold.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Basecoat;
    src: url(${basecoat}) format("opentype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: Basecoat;
    src: url(${basecoatLight}) format("opentype");
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: Basecoat;
    src: url(${basecoatBold}) format("opentype");
    font-style: normal;
    font-weight: 700;
  }

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
    margin-bottom: 0.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 0.6rem;
}

  h1 {
    font-weight: 700;
  }

  h2 {
    font-weight: 400;
    font-size: 1.6em;
  }

  strong {
    font-weight: 700;
  }
`;

export default Typography;
