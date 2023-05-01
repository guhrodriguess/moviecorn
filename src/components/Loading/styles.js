import styled, {keyframes} from "styled-components"

const textAnimation = keyframes`
  from {
    color: #fff;
  }
  to {
    color: #e50914;
  }
`

export const LoadingContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  z-index: 1001;
  position: fixed;
  background-color: #080a18;
  transition: all 0.5s ease;
`

export const LoadingLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${textAnimation} 6s;
`