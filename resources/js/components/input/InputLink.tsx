import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";

interface NavigationLinkProps {
    onClick: any;
    activated: string;
    textField: string;
    type: string;
    className?: string;
}

let NavigationLinkLi = styled.li`
    list-style: none;
    display: block;
    padding: 8px 20px;
`

let NavigationLinkA = styled.button<{ activated: boolean }>`
    cursor: pointer;
    color: white;
    text-decoration: none;
    letter-spacing: 0.07em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 1em;
    background-color: transparent;
    border: none;

    :after {
        background: none repeat scroll 0 0 #FF7F2A;
        content: "";
        display: block;
        height: 2px;
        width: ${p => p.activated ? 100 : 0};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    @media (min-width: 772px) {
        font-size: 1.1em;
    };

    @media (min-width: 992px) {
        font-size: 1.2em;
    };

    @media (min-width: 1280px) {
        font-size: 1.3em;
    };

    @media (min-width: 1920px) {
        font-size: 1.4em;
    };

    :hover {
        color: #FF7F2A;
    }

    :hover:after {
        width: 100%;
        left: 0;
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
        <NavigationLinkLi>
            <NavigationLinkA activated={isActivated} className={className} onClick={() => onClick(type)}>
                {textField}
            </NavigationLinkA>
        </NavigationLinkLi>

    );
}
