import styled from "styled-components";
import { fadeIn } from "../../styles/global";

export const HomeStyle = styled.main`
  margin-left: 305px;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid ${(props) => props.theme.primary};
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid ${(props) => props.theme.primary};
  }

  .carousel .control-dots .dot {
    background: ${(props) => props.theme.primary};
  }

  h1 {
    color: ${(props) => props.theme.text};
    max-width: 100%;
    font-size: 2.5rem;
    margin-bottom: 5px;
    text-align: start;

    @media (max-width: 1254px) {
      font-size: 1.5rem;
    }
  }

  .posterImage {
    max-height: 600px;
    filter: opacity(0.5);

    img {
      margin: auto;
      display: block;
    }

    @media (max-width: 1200px) {
      height: 200px;
    }

    @media (max-width: 1200px) {
      height: 100%;
    }
  }
`;

export const PosterOverlay = styled.div`
  position: absolute;
  padding: 5rem 4rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: 1;
  transition: opacity 0.3s;

  @media (max-width: 1200px) {
    display: none;
  }

  .primary-info {
    display: flex;
    gap: 1.5rem;

    .vote-style {
      display: flex;
      font-size: 1.5rem;
      gap: 0.3rem;
      color: ${(props) => props.theme.detail};
      text-align: center;
      align-items: center;
      margin-bottom: 0;
      font-weight: 500;

      @media (max-width: 1200px) {
        font-size: 1rem;
      }
    }
  }

  .release-date {
    display: flex;
    color: ${(props) => props.theme.detail};
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

  .sinopse {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    opacity: 0.7;
    display: flex;
    text-align: left;
    width: 50%;

    @media (max-width: 1200px) {
      display: none;
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;
