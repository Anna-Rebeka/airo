import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {NavigationLink} from "./NavigationLink";
import {NavigationLogo} from "./NavigationLogo";

interface Props {
    className?: string;
}

let NavigationImplDiv = styled.nav`
    background-color: black;
    box-shadow: 2px 3px 8px 1px black;
    z-index: 9999;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`

let NavigationLinkItemDiv = styled.ul<{ direction: string }>`
    align-items: center;
    justify-content: ${p => p.direction === "END" ? "flex-end" : "flex-start"};
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 772px) {
        flex-direction: row;
        flex-wrap: nowrap;
        display: flex;
    }
`;

let StyledCarouselButton = styled.button`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 0.8em;
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

export const NavigationImpl: FunctionComponent<Props> = ({
                                                             children,
                                                         }) => {
    let navigationLinks = [{name: "Home", href: "/"}, {name: "Gallery", href: "/gallery"}, {
        name: "Contacts",
        href: "/contacts"
    }, {name: "My flights", href: "/login"}];
    let middleIndex: number = navigationLinks ? Math.floor(navigationLinks.length / 2) : 0;
    return (
        <NavigationImplDiv>
            <NavigationLogo/>
            <NavigationLinkItemDiv direction={"END"}>
                {navigationLinks.slice(0, middleIndex).map((link: any, index: number) => (
                        <NavigationLink key={"navigation-link-" + index} href={link.href} textField={link.name}/>
                    )
                )}
            </NavigationLinkItemDiv>
            <NavigationLinkItemDiv direction={"START"}>
                {navigationLinks.slice(middleIndex, navigationLinks.length).map((link: any, index: number) => (
                        <NavigationLink key={"navigation-link-" + index} href={link.href} textField={link.name}/>
                    )
                )}
            </NavigationLinkItemDiv>
        </NavigationImplDiv>
    )

}
