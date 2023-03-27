import styled from "styled-components";

export const HomeStyle = styled.div`
  margin-left: 305px;
  margin-bottom: 1.5rem;
  animation: fade 0.4s ease;

  @media (max-width: 960px) {
    margin-left: 0;
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

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #e50914;
  }

  .carousel .control-next.control-arrow {
    right: 0;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #e50914;
  }

  .carousel .control-dots .dot {
    background: #e50914;
  }

  h1 {
    color: #fff;
    max-width: 100%;
    font-size: 2.5rem;
    margin-bottom: 5px;

    @media (max-width: 1254px) {
      font-size: 1.5rem;
    }
  }

  .posterImage {
    height: 600px;
    filter: brightness(0.4);

    img {
      margin: auto;
      display: block;
    }

    @media (max-width: 960px) {
      height: 200px;
    }

    @media (max-width: 1200px) {
      height: 100%;
    }
  }
`;

export const PosterOverlay = styled.div`
  position: absolute;
  padding: 5rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  opacity: 1;
  transition: opacity 0.3s;

  @media (max-width: 960px) {
    display: none;
  }

  .primary-info {
    display: flex;
    gap: 1rem;   
    
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

    .divider {
      background-color: #fff;
      width: 1px;
      opacity: 0.6;
      height: 3vh;
      display: flex;
      text-align: center;
      align-items: center;
    }
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

  .sinopse {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    opacity: 0.7;
    display: flex;
    text-align: left;
    width: 50%;

    @media (max-width: 960px) {
      display: none;
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;
