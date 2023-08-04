import styled from "styled-components";

export const Container = styled.div`
    margin-left: 305px;

    @media (max-width: 1200px) {
        margin-left: 0%;
    }
`;

export const Content = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    @media (max-width: 1200px) {
        height: 80vh;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin: 0 1rem;

    p {
        opacity: 0.7;
        font-weight: 500;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        border: 3px solid ${(props) => props.theme.primary};
        background: transparent;
        padding: 0.5rem 2rem;
        color: ${(props) => props.theme.primary};
        border-radius: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.text};

            #arrowLeft {
                transform: translateX(-2px);
            }
        }

        #arrowLeft {
            transition: transform 0.2s ease;
        }
    }
`;
