import styled from "styled-components";

export const CreditsWrapper = styled.section`
    width: 100%;
    padding: 1rem 0;
`;

export const CreditsContent = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
    }

    hr {
        width: 4rem;
        height: 4px;
        border: none;
        border-radius: 25px;
        background: ${(props) => props.theme.primary};
    }

    @media (max-width: 1200px) {
        align-items: center;
    }
`;

export const CreditsList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;

    span {
        color: ${(props) => props.theme.detail};
        font-weight: 500;
    }
`;

export const CreditsCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 230px;
        border-radius: 15px;
        filter: opacity(0.7);
        transition: all 0.3s;

        &:hover {
            filter: opacity(1);
        }
    }

    h4 {
        color: ${(props) => props.theme.detail};
        font-weight: 500;
    }
`;
