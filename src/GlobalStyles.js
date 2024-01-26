import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  :root {
    width: 100%;
    box-sizing: border-box;
    --primary-color: #002EFF;
    --secondary-color: #191919;
    --background-secondary-color: #F3F5FF;
  }
`;

export default GlobalStyles;