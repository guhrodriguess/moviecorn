import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchTopMovies } from "@/api/movies";

import { CardList } from "@/styles/global";
import Card from "@/components/Card";

import { MapProps } from "@/types";

export default function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies().then((response) => {
      setTopMovies(response);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <Styles.Section>
      <Styles.Details>
        <h1>Filmes</h1>
        <h3>Rankeados</h3>
      </Styles.Details>
      <CardList>
        {topMovies.map((movie: MapProps) => (
          <Link key={movie.id} to={`/movies/top/details/${movie.id}`}>
            <Card data={movie} />
          </Link>
        ))}
      </CardList>
    </Styles.Section>
  );
}
