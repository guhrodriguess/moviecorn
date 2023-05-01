// React Hooks
import { useEffect, useState } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// React Responsive Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// React Router
import { Link } from "react-router-dom";

// Styles
import { HomeStyle, PosterOverlay } from "./styles";

// Icons
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";

// Components
import MovieSlider from "../../components/MovieSlider";
import SerieSlider from "../../components/SerieSlider";

// DayJS
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const backdropImage_path = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results));
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeStyle>
      <div className="poster">
        <Carousel
          showThumbs={false}
          selectedItem={0}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.slice(0, 3).map((movie) => (
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                userSelect: "none",
              }}
              key={movie.id}
              to={`/movies/popular/details/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`${backdropImage_path}${movie && movie.backdrop_path}`}
                />
              </div>
              <PosterOverlay>
                <div className="primary-info">
                  <span className="vote-style">
                    <AiOutlineStar style={{ color: "#e50914" }} />
                    {movie.vote_average}
                  </span>
                  <span className="release-date">
                    <MdOutlineDateRange style={{ color: "#e50914" }} />
                    {dayjs(movie.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
                <h1>{movie.title}</h1>
                <span className="sinopse">{movie.overview}</span>
              </PosterOverlay>
            </Link>
          ))}
        </Carousel>
      </div>
      <MovieSlider />
      <SerieSlider />
    </HomeStyle>
  );
};

export default Home;
