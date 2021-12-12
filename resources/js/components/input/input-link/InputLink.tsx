import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";

interface NavigationLinkProps {
    onClick: any;
    activated: string;
    textField: string;
    type: string;
    className?: string;
}

let InputLinkLi = styled.li`
    list-style: none;
    display: block;
    padding: 8px 20px;
`

let InputLinkButton = styled.button<{ activated: boolean }>`
    cursor: pointer;
    color: ${p => p.activated ? "#FF7F2A" : "white"};
    text-decoration: none;
    letter-spacing: 0.04em;
    padding: 0.15em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 1.2em;
    background-color: transparent;
    border: 0.1em solid ${p => p.activated ? "#FF7F2A" : "white"};

    @media (min-width: 772px) {
        font-size: 1.3em;
    };

    @media (min-width: 992px) {
        font-size: 1.4em;
    };

    @media (min-width: 1280px) {
        font-size: 1.5em;
    };

    @media (min-width: 1920px) {
        font-size: 1.6em;
    };

    :hover {
        color: #FF7F2A;
    }
    outline: none;
`

export const InputLink: FunctionComponent<NavigationLinkProps> = ({className, textField, activated, type, onClick}) => {
    let [isActivated, setIsActivated] = useState(false);
    useEffect(() => {
        if (activated === type) {
            setIsActivated(true);
        } else {
            setIsActivated(false);
        }

    }, [activated]);
    return (
        <InputLinkLi>
            <InputLinkButton activated={isActivated} className={className} onClick={() => onClick(type)}>
                {textField}
            </InputLinkButton>
        </InputLinkLi>

    );
}
