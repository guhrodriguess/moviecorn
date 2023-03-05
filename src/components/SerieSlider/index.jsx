import { useState, useEffect } from "react";

// API
const APIKey = import.meta.env.VITE_API_KEY;

// Styles
import { Section, SerieList, Details, Serie } from "./styles";

// React Router
import { Link } from "react-router-dom";

export default function SerieSlider() {
  const [series, setSeries] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => setSeries(data.results));
  }, []);

  return (
    <Section>
      <Details>
        <h1>Séries</h1>
        <h3>Rankeados</h3>
      </Details>
      <SerieList>
        {series.slice(0, 6).map((serie) => {
          return (
            <Serie key={serie.id}>
              <Link to={`/series/top/details/${serie.id}`}>
                <img
                  src={`${image_path}${serie.poster_path}`}
                  alt={serie.title}
                />
              </Link>
            </Serie>
          );
        })}
      </SerieList>
      <div className="button-style">
        <Link to="/series/top">
          <button>VER MAIS</button>
        </Link>
      </div>
    </Section>
  );
}
