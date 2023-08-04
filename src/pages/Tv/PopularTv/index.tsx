import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchPopularTv } from "@/api/tv";

import TvCard from "@/components/TvCard";

import { CardList } from "@/styles/global";

import { MapProps } from "@/types";

export default function PopularTv() {
    const [popularTv, setPopularTv] = useState([]);

    useEffect(() => {
        fetchPopularTv().then((response) => {
            setPopularTv(response);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <Styles.Section>
            <Styles.Details>
                <h1>Tv</h1>
                <h3>Populares</h3>
            </Styles.Details>
            <CardList>
                {popularTv.map((tv: MapProps) => {
                    return (
                        <Link to={`/tv/popular/details/${tv.id}`}>
                            <TvCard data={tv} />
                        </Link>
                    );
                })}
            </CardList>
        </Styles.Section>
    );
}
