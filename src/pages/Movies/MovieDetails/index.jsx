import React, { useState, useEffect } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// React Router
import { useParams } from "react-router-dom";

// Styles
import { Header, Container } from "./styles";

// Icons
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

// DayJS
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const backdropImage_path = "https://image.tmdb.org/t/p/original/";
  const posterImage_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          backdrop_path,
          title,
          overview,
          release_date,
          vote_average,
          original_language,
          genres,
          poster_path,
        } = data;

        const movie = {
          id,
          backdropImage: `${backdropImage_path}${backdrop_path}`,
          posterImage: `${posterImage_path}${poster_path}`,
          title: title,
          sinopse: overview,
          vote: vote_average,
          releaseDate: release_date,
          language: original_language,
          genres: genres,
        };
        setMovie(movie);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <Container>
      <Header>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          <HiArrowLeft className="icon-arrow" size={20} weight="bold" />
          Voltar
        </button>
      </Header>
      <div className="movie-intro">
        <img
          className="movie-backdrop"
          src={`${movie ? movie.backdropImage : ""}`}
        />
      </div>
      <div className="movie">
        <div className="details">
          <div className="primary-info">
            <span className="release-date">
              <MdOutlineDateRange style={{ color: "#e50914" }} />
              {dayjs(movie.releaseDate).format("MMM D, YYYY")}
            </span>
            <div className="divider" />
            <span className="vote-style">
              <AiOutlineStar style={{ color: "#e50914" }} />
              {movie.vote}
            </span>
          </div>
          <h1>{movie.title}</h1>
          <div className="info-genres">
            {movie && movie.genres
              ? movie.genres.map((genre) => (
                  <>
                    <span key={genre.id} id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
          <span className="sinopse">
            {movie.sinopse === "" ? (
              <p>Sinopse indisponível.</p>
            ) : (
              movie.sinopse
            )}
          </span>
        </div>
      </div>
    </Container>
  );
}
