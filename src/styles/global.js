import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  

  ::-webkit-scrollbar{
    width: 10px;
  }

  ::-webkit-scrollbar-thumb{
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
    border: 3.5px solid ${(props) => props.theme.background};
  }

  ::selection {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0.4;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }  
`;

export default GlobalStyle;
