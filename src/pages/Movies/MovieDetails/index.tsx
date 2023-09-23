import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import * as Styles from "@/styles/details";

import { ArrowLeft, Star, Calendar } from "lucide-react";

import { fetchMovieDetails } from "@/api/movies";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import { backdropImage_path } from "@/utils";

import { DetailsProps } from "@/types";

import MovieCredits from "@/components/MovieCredits";
import MovieBackdrops from "@/components/MovieBackdrops";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({} as DetailsProps);

  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails({ id }).then((data) => {
      const {
        backdrop_path,
        vote_average,
        release_date,
        title,
        genres,
        overview,
      } = data;

      const movieDetails = {
        id,
        backdropImage: `${backdropImage_path}${backdrop_path}`,
        vote: vote_average,
        releaseDate: release_date,
        title: title,
        genres: genres,
        sinopse: overview,
      };

      setMovieDetails(movieDetails);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <Styles.Container>
      <div
        className="movie-intro"
        style={{
          backgroundImage: `url(${movieDetails?.backdropImage})`,
        }}
      />
      <Styles.Header>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          <ArrowLeft className="icon-arrow" size={20} />
          Voltar
        </button>
      </Styles.Header>
      <Styles.Details>
        <Styles.PrimaryInfo>
          <span className="vote-style">
            <Star color="#e50914" />
            {movieDetails.vote}
          </span>
          <span className="release-date">
            <Calendar color="#e50914" />
            {dayjs(movieDetails.releaseDate).format("MMM D, YYYY")}
          </span>
        </Styles.PrimaryInfo>
        <h1>{movieDetails.title}</h1>
        <Styles.InfoGenres>
          {movieDetails && movieDetails.genres
            ? movieDetails.genres.slice(0, 3).map((genre) => (
                <>
                  <span key={genre.id} id={genre.id}>
                    {genre.name}
                  </span>
                </>
              ))
            : ""}
        </Styles.InfoGenres>
        <Styles.Sinopse>
          {!movieDetails.sinopse ? (
            <p>Sinopse indisponível.</p>
          ) : (
            movieDetails.sinopse
          )}
        </Styles.Sinopse>

        <MovieCredits id={id} />

        <MovieBackdrops id={id} />
      </Styles.Details>
    </Styles.Container>
  );
}
