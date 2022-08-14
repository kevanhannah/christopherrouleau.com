import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  --base-black: 0, 0%;
  --black: hsl(var(--base-black), 10%);
  --black-light: hsl(var(--base-black), 20%);
  --black-lighter: hsl(var(--base-black), 30%);
  --black-lightest: hsl(var(--base-black), 40%);

  --base-grey: 240, 26%;
  --medium-grey: hsl(var(--base-grey), 87%);
  --light-grey: hsl(var(--base-grey), 97%);
  --dark-grey: hsl(var(--base-grey), 77%);
  --darker-grey: hsl(var(--base-grey), 67%);
  --darkest-grey: hsl(var(--base-grey), 57%);

  --base-primary-blue: 224, 76%;
  --primary-blue: hsl(var(--base-primary-blue), 34%);
  --primary-blue-lighter: hsl(var(--base-primary-blue), 44%);
  --primary-blue-darker: hsl(var(--base-primary-blue), 24%);

  --base-secondary-blue: 207, 61%;
  --secondary-blue: hsl(var(--base-secondary-blue), 52%);
  --secondary-blue-lighter: hsl(var(--base-secondary-blue), 62%);
  --secondary-blue-darker: hsl(var(--base-secondary-blue), 42%);

  --base-red: 358, 74%;
  --primary-red: hsl(var(--base-red), 59%);
  --primary-red-lighter: hsl(var(--base-red), 69%);
  --primary-red-darker: hsl(var(--base-red), 49%);

  --base-yellow: 47, 94%;
  --primary-yellow: hsl(var(--base-yellow), 64%);
  --primary-yellow-lighter: hsl(var(--base-yellow), 74%);
  --primary-yellow-darker: hsl(var(--base-yellow), 54%);
  }

  ::selection {
    background: var(--primary-yellow);
  }

  *, :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 62.5%;
  }

  hr, ol, p, pre, ul {
    margin-bottom: 0.8rem;
  }

  ol, ul {
    margin-left: 1.5em;
  }

  a {
    font-size: 1em;
    font-weight: 400;
    color: var(--black);
    -webkit-text-decoration-thickness: 0.125em;
    text-decoration-thickness: 0.125em;
    text-underline-offset: 0.125em;

    &:hover {
      text-decoration: none;
      color: var(--primary-blue);
    }
  }
`;

export default GlobalStyles;
