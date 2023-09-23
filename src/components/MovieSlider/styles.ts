// Styled Components
import styled from "styled-components";

// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fadeIn } from "../../styles/global";

export const Section = styled.section`
  animation: ${fadeIn} 0.3s ease;
  padding: 1rem 4rem;
  list-style: none;

  @media (max-width: 1200px) {
    padding: 0rem 2rem;
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.primary};
  }

  .swiper-button-next {
    color: ${(props) => props.theme.primary};
  }
`;

export const Details = styled.div`
  margin: 1.5rem 0;

  h1 {
    color: ${(props) => props.theme.primary};
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
    color: ${(props) => props.theme.text};
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    text-align: center;
  }
`;
