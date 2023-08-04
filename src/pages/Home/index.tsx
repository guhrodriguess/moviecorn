import { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { Star, Calendar } from "lucide-react";

import MovieSlider from "@/components/MovieSlider";
import TvSlider from "@/components/TvSlider";

import { fetchPopularMovies } from "@/api/movies";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import { backdropImage_path } from "@/utils";

export default function Home() {
    const [popularMovies, setPopularMovies] = useState<any>([]);

    useEffect(() => {
        fetchPopularMovies().then((response) => {
            setPopularMovies(response);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <Styles.HomeStyle>
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
                                    src={`${backdropImage_path}${
                                        movie && movie.backdrop_path
                                    }`}
                                />
                            </div>
                            <Styles.PosterOverlay>
                                <div className="primary-info">
                                    <span className="vote-style">
                                        <Star style={{ color: "#e50914" }} />
                                        {movie.vote_average}
                                    </span>
                                    <span className="release-date">
                                        <Calendar
                                            style={{ color: "#e50914" }}
                                        />
                                        {dayjs(movie.release_date).format(
                                            "MMM D, YYYY"
                                        )}
                                    </span>
                                </div>
                                <h1>{movie.title}</h1>
                                <span className="sinopse">
                                    {movie.overview}
                                </span>
                            </Styles.PosterOverlay>
                        </Link>
                    ))}
                </Carousel>
            </div>

            <MovieSlider />
            <TvSlider />
        </Styles.HomeStyle>
    );
}
