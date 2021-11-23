import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
    href: string;
    text: string;
}

let ButtonCoreButton = styled.a`
    text-decoration: none;
    border: 2px solid white;
    color: white;
    font-size: 1.05em;
    cursor: pointer;
    text-shadow: 0 5px 8px black;
    background-color: transparent;
    text-align: center;
    vertical-align: center;
    padding: 0.5rem 1rem;
    font-family: 'Arial', cursive;
    font-weight: bold;
    margin: 0.4em 0.5em;

    :hover {
        color: black;
        border: 2px solid black;
        text-shadow: none;
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


export const ButtonHrefAnother: FunctionComponent<Props> = ({text, href, className, children}) => {
    return (
        <ButtonCoreButton href={href && href} className={className}>
            {text && text}
            {children}
        </ButtonCoreButton>
    );
}
