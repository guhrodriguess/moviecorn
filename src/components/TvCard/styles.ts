import styled from "styled-components";

export const TvCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100%;
        border: 2px solid transparent;
        border-radius: 15px;
        transition: all 0.3s;

        &:hover {
            opacity: 0.5;
            border: 2px solid ${(props) => props.theme.text};
        }
    }
`;
