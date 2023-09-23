import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as Styles from "./styles";

import { fetchReleaseTv } from "@/api/tv";

import TvCard from "@/components/Card";

import { CardList } from "@/styles/global";

import { MapProps } from "@/types";

export default function ReleaseTv() {
  const [releaseTv, setReleaseTv] = useState([]);

  useEffect(() => {
    fetchReleaseTv().then((response) => {
      setReleaseTv(response);
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <Styles.Section>
      <Styles.Details>
        <h1>Tv</h1>
        <h3>Lançamentos</h3>
      </Styles.Details>
      <CardList>
        {releaseTv.map((tv: MapProps) => (
          <Link key={tv.id} to={`/tv/releases/details/${tv.id}`}>
            <TvCard data={tv} />
          </Link>
        ))}
      </CardList>
    </Styles.Section>
  );
}
