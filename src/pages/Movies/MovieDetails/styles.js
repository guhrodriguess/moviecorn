import styled from "styled-components";

export const Container = styled.div`
  animation: fade 0.4s ease;
  display: flex;
  flex-direction: column;
  margin-left: 305px;
  position: relative;

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

  h1 {
    color: #fff;
    max-width: 100%;
    font-size: 3rem;
    margin-bottom: 5px;

    @media (max-width: 1200px) {
      font-size: 2rem;
      padding: 0.5rem;
    }
  }

  .movie-intro {
    position: relative;
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: 35% 35%;
    filter: opacity(0.5);

    @media (max-width: 1200px) {
      height: 30vh;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 2rem;

    @media (max-width: 1200px) {
      align-items: center;
      text-align: center;
    }
  }

  .primary-info {
    display: flex;
    gap: 1.5rem;

    .vote-style {
      display: flex;
      font-size: 1.5rem;
      gap: 0.3rem;
      color: #a9a9b2;
      text-align: center;
      align-items: center;
      margin-bottom: 0;
      font-weight: 500;

      @media (max-width: 1200px) {
        font-size: 1rem;
      }
    }
  }

  .sinopse {
    width: 100%;
    font-size: 1rem;
    opacity: 0.7;
    border-radius: 5px;
    padding: 0.5rem 0;

    @media (max-width: 1200px) {
      width: 80%;
    }
  }

  .info-genres {
    display: flex;
    gap: 0.5rem;

    @media (max-width: 1200px) {
      font-size: 11px;
    }

    span {
      display: flex;
      text-align: center;
      align-items: center;
      background: #e50914;
      font-size: 100%;
      font-weight: 600;
      border-radius: 0.5rem;
      color: #fff;
      padding: 0.5rem 1rem;
    }
  }

  button {
    background: none;
    border: 2px solid #e50914;
    color: #e50914;
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
    user-select: none;

    &:hover {
      background: #e50914;
      color: #000;
    }
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .release-date {
    display: flex;
    color: #a9a9b2;
    font-size: 1.5rem;
    gap: 0.3rem;
    text-align: center;
    align-items: center;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-bottom: 0rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }

  .language {
    background: #e50914;
    font-size: 100%;
    font-weight: 600;
    border-radius: 0.5rem;
    color: #000;
    padding: 0.25rem 0.5rem;
  }

  .info-language {
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    margin-left: 0%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 0 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    background: #080b22;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    padding: 0.3rem 0.6rem;
    transition: all 0.3s;
    color: #fff;

    .icon-arrow {
      color: #fff;
    }

    &:hover {
      background-color: #060813;
      color: #fff;
    }
  }
`;
