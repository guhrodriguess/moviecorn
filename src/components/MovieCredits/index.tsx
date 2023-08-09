import { useState, useEffect } from "react";

import * as Styled from "@/styles/credits";

import { fetchMovieCredits } from "@/api/movies";

import { backdropImage_path } from "@/utils";

import { CreditsProps } from "@/types";

export default function MovieCredits({ id }) {
    const [movieCredits, setMovieCredits] = useState([]);

    useEffect(() => {
        fetchMovieCredits({ id }).then((response) => {
            setMovieCredits(response);
        });
    }, []);

    return (
        <Styled.CreditsWrapper>
            <Styled.CreditsContent>
                <h1>Atores</h1>
                <hr />
            </Styled.CreditsContent>
            <Styled.CreditsList>
                {movieCredits.length > 0 ? (
                    movieCredits.slice(0, 6).map((credit: CreditsProps) => (
                        <Styled.CreditsCard key={credit.id}>
                            <img
                                src={`${backdropImage_path}${credit.profile_path}`}
                                alt={credit.original_name}
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
