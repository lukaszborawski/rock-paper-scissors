import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Barlow Semi Condensed', sans-serif;
    background: ${({ theme }) => theme.background};
  }
`;

export default GlobalStyle;
