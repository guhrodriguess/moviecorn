import styled from "styled-components";
import { fadeIn } from "./global";

export const Container = styled.main`
    animation: ${fadeIn} 0.4s ease;
    display: flex;
    flex-direction: column;
    margin-left: 305px;
    position: relative;

    h1 {
        color: ${(props) => props.theme.text};
        max-width: 100%;
        font-size: 3rem;

        @media (max-width: 1200px) {
            font-size: 2rem;
            padding: 0.5rem;
        }
    }

    .movie-intro {
        position: relative;
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-position: 35% 35%;
        filter: opacity(0.5);

        @media (max-width: 1200px) {
            height: 30vh;
        }
    }

    .serie-intro {
        position: relative;
        width: 100%;
        height: 50vh;
        background-size: cover;
        background-position: 35% 35%;
        filter: opacity(0.5);

        @media (max-width: 1200px) {
            height: 30vh;
        }
    }

    button {
        background: none;
        border: 2px solid ${(props) => props.theme.primary};
        color: ${(props) => props.theme.primary};
        cursor: pointer;
        border-radius: 1rem;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    span {
        font-size: 1rem;
    }

    @media (max-width: 1200px) {
        margin-left: 0%;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    position: absolute;
    margin: 0 1rem;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        background: ${(props) => props.theme.button_800};
        border: none;
        cursor: pointer;
        border-radius: 10px;
        padding: 0.3rem 0.6rem;
        transition: all 0.3s;
        color: ${(props) => props.theme.text};

        .icon-arrow {
            color: ${(props) => props.theme.text};
        }

        &:hover {
            background-color: ${(props) => props.theme.button_900};
            color: ${(props) => props.theme.text};
        }
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.5rem 2rem;
    gap: 0.5rem;

    @media (max-width: 1200px) {
        align-items: center;
        text-align: center;
    }
`;

export const PrimaryInfo = styled.div`
    display: flex;
    gap: 1.5rem;

    .vote-style {
        display: flex;
        font-size: 1.5rem;
        gap: 0.3rem;
        color: ${(props) => props.theme.detail};
        text-align: center;
        align-items: center;
        font-weight: 500;

        @media (max-width: 1200px) {
            font-size: 1rem;
        }
    }

    .release-date {
        display: flex;
        color: ${(props) => props.theme.detail};
        font-size: 1.5rem;
        gap: 0.3rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
        text-transform: capitalize;
        font-size: 1.5rem;

        @media (max-width: 1200px) {
            font-size: 1rem;
        }
    }
`;

export const InfoGenres = styled.div`
    display: flex;
    gap: 0.5rem;

    @media (max-width: 1200px) {
        font-size: 11px;
    }

    span {
        display: flex;
        text-align: center;
        align-items: center;
        background: ${(props) => props.theme.primary};
        font-size: 0.8rem;
        font-weight: 600;
        border-radius: 0.5rem;
        color: ${(props) => props.theme.text};
        padding: 0.5rem 1rem;
    }
`;

export const Sinopse = styled.span`
    width: 100%;
    font-size: 1rem;
    opacity: 0.7;
    border-radius: 5px;
    padding: 1rem 0;

    @media (max-width: 1200px) {
        width: 80%;
    }
`;
