// Styled Components
import styled from "styled-components";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Section = styled.div`
  animation: fade 0.3s ease;
  padding: 1rem 4rem;
  list-style: none;

  @media (max-width: 1200px) {
    padding: 0rem 2rem;
  }

  .swiper-button-prev {
    color: #e50914;
  }

  .swiper-button-next {
    color: #e50914;
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

    @media (max-width: 1200px) {
      margin-left: 0rem;
      text-align: center;
    }
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

  @media (max-width: 1200px) {
    margin-left: 0rem;
    text-align: center;
  }

  @media (min-width: 1501px) {
    margin-left: 1rem;
  }
`;

export const Serie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    user-select: none;
    border: 2px solid transparent;
    transition: all 0.3s;
    border-radius: 15px;

    &:hover {
      opacity: 0.5;
      border: 2px solid #fff;
    }

    @media (max-width: 1200px) {
      width: 150px;
    }
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
`;
