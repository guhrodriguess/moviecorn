import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchPopularMovies } from "@/api/movies";

import MovieCard from "@/components/MovieCard";

import { CardList } from "@/styles/global";

import { MapProps } from "@/types";

export default function PopularMovies() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then((response) => {
            setPopularMovies(response);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <Styles.Section>
            <Styles.Details>
                <h1>Filmes</h1>
                <h3>Populares</h3>
            </Styles.Details>
            <CardList>
                {popularMovies.map((movie: MapProps) => {
                    return (
                        <Link to={`/movies/popular/details/${movie.id}`}>
                            <MovieCard data={movie} />
                        </Link>
                    );
                })}
            </CardList>
        </Styles.Section>
    );
}
