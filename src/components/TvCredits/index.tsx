import { useState, useEffect } from "react";

import * as Styled from "@/styles/credits";

import { fetchTvCredits } from "@/api/tv";

import { backdropImage_path } from "@/utils";

import { CreditsProps } from "@/types";

export default function TvCredits({ id }) {
  const [tvCredits, setTvCredits] = useState([]);

  useEffect(() => {
    fetchTvCredits({ id }).then((response) => {
      setTvCredits(response);
    });
  }, []);

  return (
    <Styled.CreditsWrapper>
      <Styled.CreditsContent>
        <h1>Atores</h1>
        <hr />
      </Styled.CreditsContent>
      <Styled.CreditsList>
        {tvCredits.length > 0 ? (
          tvCredits.slice(0, 6).map((credit: CreditsProps) => (
            <Styled.CreditsCard key={credit.id}>
              <img
                src={`${backdropImage_path}${credit.profile_path}`}
                alt={credit.original_name}
                loading="lazy"
              />
              <h4>{credit.original_name}</h4>
            </Styled.CreditsCard>
          ))
        ) : (
          <span>Imagem não encontrada.</span>
        )}
      </Styled.CreditsList>
    </Styled.CreditsWrapper>
  );
}
