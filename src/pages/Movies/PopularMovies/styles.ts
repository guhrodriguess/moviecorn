import styled from "styled-components";
import { fadeIn } from "../../../styles/global";

export const Section = styled.main`
    animation: ${fadeIn} 0.3s ease;
    padding: 0 0.5rem 0 20rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;

    @media (max-width: 1500px) {
        padding: 0rem 2rem;
    }
`;

export const Details = styled.div`
    margin: 1.5rem 0;

    h1 {
        color: ${(props) => props.theme.primary};
        font-weight: 600;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 500;
    }

    .title {
        color: ${(props) => props.theme.text};
    }

    p {
        margin-top: 0.5rem;
        opacity: 0.8;
    }

    @media (max-width: 1200px) {
        margin-left: 0rem;
        text-align: center;
    }

    @media (min-width: 1201px) {
        margin-left: 20rem;
    }

    @media (min-width: 1501px) {
        margin-left: 1rem;
    }
`;
