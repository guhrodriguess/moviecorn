import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 0;
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
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
    animation: ${fade} 1s ease-in-out;
    animation-delay: 1s;
  }

  span {
    color: #e50914;
  }

  .icon {
    color: #e50914;
    animation: ${spin} 2.5s linear infinite;
  }
`;
