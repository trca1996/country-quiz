import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  background: url('/img/background.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

body { 
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

`;

export default GlobalStyle;
