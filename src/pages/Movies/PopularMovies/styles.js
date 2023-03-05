import styled from "styled-components";

export const Section = styled.div`
  animation: fade 0.3s ease;
  padding-left: 20rem;
  padding-right: 0.5rem;
  margin-bottom: 3rem;
  margin-top: 1.5rem;

  @keyframes fade {
    from {
      opacity: 0.4;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1500px) {
    padding: 0rem 2rem;
  }
`;

export const Details = styled.div`
  margin: 1.5rem 0;

  h1 {
    color: #e50914;
    font-weight: 600;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 500;
  }

  .title {
    color: #fff;
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.8;
  }

  @media (max-width: 960px) {
    margin-left: 0rem;
    text-align: center;
  }

  @media (min-width: 961px) {
    margin-left: 20rem;
  }

  @media (min-width: 1501px) {
    margin-left: 1rem;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 0.5rem;

  @media (max-width: 366px) {
    padding-left: 0rem;
  }

  @media (min-width: 960px) {
    padding-left: 18.5rem;
  }

  @media (min-width: 1501px) {
    padding-left: 0;
  }
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    user-select: none;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
      border: 2px solid #fff;
    }
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`;
