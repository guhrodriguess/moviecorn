import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import * as Styles from "@/styles/details";

import { ArrowLeft, Star, Calendar } from "lucide-react";

import { fetchTvDetails } from "@/api/tv";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

import { backdropImage_path } from "@/utils";

import { DetailsProps } from "@/types";

import TvCredits from "@/components/TvCredits";
import TvBackdrops from "@/components/TvBackdrops";

export default function TvDetails() {
    const [tvDetails, setTvDetails] = useState({} as DetailsProps);

    const { id } = useParams();

    useEffect(() => {
        fetchTvDetails({ id }).then((data) => {
            const {
                backdrop_path,
                vote_average,
                first_air_date,
                name,
                genres,
                overview,
            } = data;

            const tvDetails = {
                id,
                backdropImage: `${backdropImage_path}${backdrop_path}`,
                vote: vote_average,
                releaseDate: first_air_date,
                title: name,
                genres: genres,
                sinopse: overview,
            };

            setTvDetails(tvDetails);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <Styles.Container>
            <div
                className="serie-intro"
                style={{
                    backgroundImage: `url(${tvDetails?.backdropImage})`,
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
                        <Star style={{ color: "#e50914" }} />
                        {tvDetails.vote}
                    </span>
                    <span className="release-date">
                        <Calendar style={{ color: "#e50914" }} />
                        {dayjs(tvDetails.releaseDate).format("MMM D, YYYY")}
                    </span>
                </Styles.PrimaryInfo>
                <h1>{tvDetails.title}</h1>
                <Styles.InfoGenres>
                    {tvDetails && tvDetails.genres
                        ? tvDetails.genres.slice(0, 3).map((genre) => (
                              <>
                                  <span key={genre.id} id={genre.id}>
                                      {genre.name}
                                  </span>
                              </>
                          ))
                        : ""}
                </Styles.InfoGenres>
                <Styles.Sinopse>
                    {!tvDetails.sinopse ? (
                        <p>Sinopse indisponível.</p>
                    ) : (
                        tvDetails.sinopse
                    )}
                </Styles.Sinopse>

                <TvCredits id={id} />

                <TvBackdrops id={id} />
            </Styles.Details>
        </Styles.Container>
    );
}
