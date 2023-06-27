// React Hooks
import { useState, useEffect } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// React Router
import { useParams } from "react-router-dom";

// Styles
// Styles
import {
  Header,
  Container,
  Details,
  PrimaryInfo,
  InfoGenres,
  Sinopse,
} from "../../../styles/details";

// Icons
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

// DayJS
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

// Serie Details
export default function SerieDetails() {
  const { id } = useParams();

  const [serie, setSerie] = useState({});
  const backdropImage_path = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const {
          backdrop_path,
          name,
          overview,
          first_air_date,
          original_language,
          genres,
          vote_average,
        } = data;

        const serie = {
          id,
          backdropImage: `${backdropImage_path}${backdrop_path}`,
          name: name,
          sinopse: overview,
          vote: vote_average,
          releaseDate: first_air_date,
          language: original_language,
          genres: genres,
        };
        setSerie(serie);
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <Container>
      <div
        className="serie-intro"
        style={{ backgroundImage: `url(${serie?.backdropImage})` }}
      />
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
      <Details>
        <PrimaryInfo>
          <span className="vote-style">
            <AiOutlineStar style={{ color: "#e50914" }} />
            {serie.vote}
          </span>
          <span className="release-date">
            <MdOutlineDateRange style={{ color: "#e50914" }} />
            {dayjs(serie.releaseDate).format("MMM D, YYYY")}
          </span>
        </PrimaryInfo>
        <h1>{serie.name}</h1>
        <InfoGenres>
          {serie && serie.genres
            ? serie.genres.slice(0, 3).map((genre) => (
                <>
                  <span key={genre.id} id={genre.id}>
                    {genre.name}
                  </span>
                </>
              ))
            : ""}
        </InfoGenres>
        <Sinopse>
          {serie.sinopse === "" ? <p>Sinopse indisponível.</p> : serie.sinopse}
        </Sinopse>
      </Details>
    </Container>
  );
}
