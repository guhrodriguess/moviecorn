// React Hooks
import { useState, useEffect } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// Styles
import { Section, MovieList, Details, Movie } from "./styles";

// React Router
import { Link } from "react-router-dom";

// Release Movies
export default function ReleaseMovies() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <Details>
        <h1>Filmes</h1>
        <h3>Lançamentos</h3>
      </Details>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/movies/releases/details/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </Movie>
          );
        })}
      </MovieList>
    </Section>
  );
}
