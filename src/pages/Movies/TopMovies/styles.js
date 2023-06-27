import styled from "styled-components";
import { fadeIn } from "./../../../styles/global";

export const Section = styled.div`
  animation: ${fadeIn} 0.3s ease;
  padding: 0 0.5rem 0 20rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 1500px) {
    padding: 0rem 2rem;
  }
`;

export const Details = styled.div`
  margin: 1.5rem 0;

  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 500;
  }

  .title {
    color: ${(props) => props.theme.text};
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    margin-left: 0rem;
    text-align: center;
  }

  @media (min-width: 1201px) {
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

  @media (min-width: 1200px) {
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
      border: 2px solid ${(props) => props.theme.text};
    }
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`;
