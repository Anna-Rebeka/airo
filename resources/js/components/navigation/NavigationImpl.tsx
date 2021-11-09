import {FunctionComponent} from "react";
import styled from "@emotion/styled";
import React from 'react';

interface Props {
    logo: any;
    className?: string;
}

let NavigationImplDiv = styled.nav`
    background-color: black;
    top: 0;
    z-index: 9999;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
`

let NavigationLinkItemDiv = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 772px) {
        flex-direction: row;
        flex-wrap: nowrap;
    }

`;

let NavigationLinkA = styled.a`
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    text-shadow: 0 10px 16px black;
    transition: font-size 1.3s, color 0.5s;
    font-size: 2em;

    :hover {
        color: white;
    }
`

export const NavigationImpl: FunctionComponent<Props> = ({
                                                                                    children,
                                                                                }) => {
    return (
        <NavigationImplDiv>
            <NavigationLinkItemDiv>
                <NavigationLinkA>
                    ONE
                </NavigationLinkA>
                <NavigationLinkA>
                    TWO
                </NavigationLinkA>
            </NavigationLinkItemDiv>
            {children}
        </NavigationImplDiv>
    );
}
