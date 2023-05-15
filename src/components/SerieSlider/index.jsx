// React Hooks
import { useState, useEffect } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// Styles
import { Section, Details, Serie } from "./styles";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// React Router
import { Link } from "react-router-dom";

export default function SerieSlider() {
  const [series, setSeries] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results));
  }, []);

  return (
    <Section>
      <Details>
        <h1>Filmes</h1>
        <h3>Rankeados</h3>
      </Details>
      <Swiper
        navigation
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={6}
        breakpoints={{
          100: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        style={{ width: "100%", height: "max-content" }}
      >
        {series.map((serie) => {
          return (
            <SwiperSlide>
              <Serie key={serie.id}>
                <Link to={`/series/top/details/${serie.id}`}>
                  <img
                    src={`${image_path}${serie.poster_path}`}
                    alt={serie.title}
                  />
                </Link>
              </Serie>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
