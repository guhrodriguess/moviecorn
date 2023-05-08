import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 1001;
  position: fixed;
  background-color: #080a18;
`;

export const LoadingLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
  }

  span {
    color: #e50914;
  }

  .icon {
    color: #e50914;
    animation: ${spin} 2s linear infinite;
  }
`;