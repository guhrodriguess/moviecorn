import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchReleaseMovies } from "@/api/movies";

import { CardList } from "@/styles/global";
import Card from "@/components/Card";

import { MapProps } from "@/types";

export default function ReleaseMovies() {
  const [releaseMovies, setReleaseMovies] = useState([]);

  useEffect(() => {
    fetchReleaseMovies().then((response) => {
      setReleaseMovies(response);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <Styles.Section>
      <Styles.Details>
        <h1>Filmes</h1>
        <h3>Lançamentos</h3>
      </Styles.Details>
      <CardList>
        {releaseMovies.map((movie: MapProps) => (
          <Link key={movie.id} to={`/movies/releases/details/${movie.id}`}>
            <Card data={movie} />
          </Link>
        ))}
      </CardList>
    </Styles.Section>
  );
}
