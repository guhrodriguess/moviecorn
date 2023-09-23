import styled, { createGlobalStyle, keyframes } from "styled-components";

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

	:is(header, button, img) {
		user-select: none;
	}
`;

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 0.5rem;
  row-gap: 0.5rem;

  @media (max-width: 366px) {
    padding-left: 0rem;
  }

  @media (min-width: 1200px) {
    padding-left: 18.5rem;
  }

  @media (min-width: 1501px) {
    padding-left: 0;
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
