import { useState, useEffect } from "react";

import * as Styles from "./styles";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { fetchTopMovies } from "@/api/movies";

import Card from "../Card";

import { MapProps } from "@/types";

export default function MovieSlider() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies().then((response) => {
      setTopMovies(response);
    });
  }, []);

  return (
    <Styles.Section>
      <Styles.Details>
        <h1>Filmes</h1>
        <h3>Rankeados</h3>
      </Styles.Details>
      <Swiper
        navigation
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          710: {
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
        {topMovies.map((movie: MapProps) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movies/top/details/${movie.id}`}>
              <Card data={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.Section>
  );
}
