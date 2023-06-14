import styled from "styled-components";

export const Container = styled.div`
  margin-left: 305px;

  @media (max-width: 1200px) {
    margin-left: 0%;
  }
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  @media (max-width: 1200px) {
    height: 80vh;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin: 0 1rem;

  p {
    opacity: 0.7;
    font-weight: 500;
  }

  button {
    border: 3px solid #e50914;
    background: transparent;
    padding: 0.5rem 1rem;
    color: #e50914;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background: #e50914;
      color: #fff;
    }
  }
`;
