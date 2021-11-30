import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
    href: string;
    text: string;
}

let StyledCarouselButton = styled.a`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 1.05em;
    cursor: pointer;
    background-color: transparent;
    text-align: center;
    vertical-align: center;
    padding: 0.5rem 1rem;
    font-weight: bold;
    margin: 0.5em 0;
    text-shadow: 0 5px 8px black;

    :hover {
        color: #FF7F2A;
        border: 0.1em solid #FF7F2A;
    }

    @media (min-width: 772px) {
        font-size: 1.6em;
    }

    @media (min-width: 992px) {
        font-size: 1.8em;
    }

    @media (min-width: 1280px) {
        font-size: 2em;
    }

    @media (min-width: 1920px) {
        font-size: 2.5em;
    }
    transition: background-color 0.2s, color 0.3s;
`;


export const CarouselButton: FunctionComponent<Props> = ({text, href, className, children}) => {
    return (
        <StyledCarouselButton href={href && href} className={className}>
            {text && text}
            {children}
        </StyledCarouselButton>
    );
}
