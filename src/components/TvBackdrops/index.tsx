import { useEffect, useState } from "react";

import * as Styled from "@/styles/backdrops";

import { fetchTvBackdrops } from "@/api/tv";

import { backdropImage_path } from "@/utils";

export default function TvBackdrops({ id }) {
    const [tvBackdrops, setTvBackdrops] = useState([]);

    useEffect(() => {
        fetchTvBackdrops({ id }).then((response) => {
            setTvBackdrops(response);
        });
    }, []);

    return (
        <Styled.BackdropsWrapper>
            <Styled.BackdropsContent>
                <h1>Pôsteres</h1>
                <hr />
            </Styled.BackdropsContent>
            <Styled.BackdropsList>
                {tvBackdrops.length > 0 ? (
                    tvBackdrops.slice(0, 4).map(({ id, file_path }) => (
                        <Styled.BackdropImage key={id}>
                            <img
                                src={`${backdropImage_path}${file_path}`}
                                loading="lazy"
                            />
                        </Styled.BackdropImage>
                    ))
                ) : (
                    <span>Imagem não encontrada.</span>
                )}
            </Styled.BackdropsList>
        </Styled.BackdropsWrapper>
    );
}
