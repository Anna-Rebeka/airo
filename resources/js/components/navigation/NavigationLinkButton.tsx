import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    activated: boolean;
    onClick: any;
    text: string;
}

let NavigationLinkBtn = styled.button<{ activated: boolean }>`
    cursor: pointer;
    color: white;
    text-decoration: none;
    letter-spacing: 0.07em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 1em;
    background-color: transparent;
    border: 0;

    :after {
        background: none repeat scroll 0 0 #FF7F2A;
        content: "";
        display: block;
        height: 2px;
        width: ${p => p.activated ? 100 : 0};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    @media (min-width: 772px) {
        font-size: 1.3em;
    };

    @media (min-width: 1060px) {
        font-size: 1.6em;
    };

    @media (min-width: 1280px) {
        font-size: 1.8em;
    };

    @media (min-width: 1920px) {
        font-size: 2em;
    };

    :hover {
        color: #FF7F2A;
    }

    :hover:after {
        width: 100%;
        left: 0;
    }
`

export const NavigationLinkButton: FunctionComponent<Props> = ({activated, onClick, text}) => {


    return (
        <NavigationLinkBtn id={"show-btn-" + text} activated={activated} onClick={onClick}>
            {text}
        </NavigationLinkBtn>
    );
}
