import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }

  body {
    background-color: #060813;
    color: #fff;
    outline: none;
  }
  
  ::-webkit-scrollbar{
    width: 10px;
  }

  ::-webkit-scrollbar-thumb{
    background: #E50914;
    border-radius: 10px;
    border: 3.5px solid #111;
  }

  ::selection {
    background: #E50914;
    color: #fff;
  }
`;

export default GlobalStyle;
