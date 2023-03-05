import styled from "styled-components";

export const Section = styled.div`
  animation: fade 0.3s ease;
  padding: 1rem 4rem;

  @media (max-width: 1500px) {
    padding: 0rem 2rem;
  }

  .button-style {
    padding: 1rem 0rem;
    display: flex;
    justify-content: center;

    button {
      width: 1200px;
      padding: 1rem;
      border-radius: 50px;
      background: transparent;
      border: 2px solid #e50914;
      color: #e50914;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s linear;
      
      &:hover {
        background-color: #e50914;
        color: #fff;
      }

      @media (max-width: 616px) {
        width: 300px;
      }

      @media (min-width: 617px) {
        width: 600px;
      }

      @media (min-width: 1600px) {
        width: 1000px;
      }
    }
  }

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

  @media (min-width: 1501px) {
    margin-left: 1rem;
  }
`;

export const SerieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 0.5rem;

  @media (max-width: 366px) {
    padding-left: 0rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (min-width: 1501px) {
    padding-left: 0;
  }
`;

export const Serie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    user-select: none;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: all 0.3s;

    &:hover {
      opacity: 0.5;
      border: 2px solid #fff;
    }

    @media (max-width: 960px) {
      width: 150px;
    }
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`;