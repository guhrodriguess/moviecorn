import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchTopTv } from "@/api/tv";

import TvCard from "@/components/Card";

import { CardList } from "@/styles/global";

import { MapProps } from "@/types";

export default function TopTv() {
    const [topTv, setTopTv] = useState([]);

    useEffect(() => {
        fetchTopTv().then((response) => {
            setTopTv(response);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <Styles.Section>
            <Styles.Details>
                <h1>Tv</h1>
                <h3>Rankeados</h3>
            </Styles.Details>
            <CardList>
                {topTv.map((tv: MapProps) => (
                    <Link key={tv.id} to={`/tv/top/details/${tv.id}`}>
                        <TvCard data={tv} />
                    </Link>
                ))}
            </CardList>
        </Styles.Section>
    );
}
