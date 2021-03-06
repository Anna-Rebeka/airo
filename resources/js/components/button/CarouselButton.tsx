import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
    text: string;
    onClick: any;
}

let StyledCarouselButton = styled.button`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-shadow: 0 5px 8px black;

    :hover {
        color: #FF7F2A;
        border: 0.1em solid #FF7F2A;
    }

    @media (min-width: 772px) {
        font-size: 1.4em;
    }

    @media (min-width: 992px) {
        font-size: 1.6em;
    }

    @media (min-width: 1280px) {
        font-size: 1.8em;
    }

    @media (min-width: 1920px) {
        font-size: 2em;
    }
    transition: background-color 0.2s, color 0.3s;
`;


export const CarouselButton: FunctionComponent<Props> = ({onClick, text, className}) => {
    return (
        <StyledCarouselButton className={className} onClick={onClick}>
            {text && text}
        </StyledCarouselButton>
    );
}
