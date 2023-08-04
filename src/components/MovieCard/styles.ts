import styled from "styled-components";

export const MovieCard = styled.li`
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
