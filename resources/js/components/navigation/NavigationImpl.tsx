import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {NavigationLink} from "./NavigationLink";
import {NavigationLogo} from "./NavigationLogo";
import axios from "axios";

interface Props {
    user: any;
    setUser: any;
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
    width: 50%;

    @media (min-width: 476px) {
        width: 100%;
    }

    @media (min-width: 772px) {
        flex-direction: row;
        flex-wrap: nowrap;
        display: flex;
    }
`;

let LogoutButton = styled.div`
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    padding: 8px 20px;
    width: 40px;
    height: auto;
    cursor: pointer;
    color: white;
    text-align: center;

    :hover {
        color: #FF7F2A;
    }

    transition: color 0.7s ease;

    @media (min-width: 772px) {
        width: 70px;
    };

    @media (min-width: 992px) {
        width: 75px;
    }

    @media (min-width: 1280px) {
        width: 85px;
    };

    @media (min-width: 1920px) {
        width: 100px;
    };
`

export const NavigationImpl: FunctionComponent<Props> = ({
                                                             setUser,
                                                             user,
                                                             children,
                                                         }) => {
    let navigationLinks = [{name: "Home", href: "/", needLogin: false}, {
        name: "Gallery",
        href: "/gallery",
        needLogin: false
    }, {
        name: "Contacts",
        href: "/contacts",
        needLogin: false
    }, {name: "My flights", href: "/myflights", needLogin: true}];
    let middleIndex: number = navigationLinks ? Math.floor(navigationLinks.length / 2) : 0;
    return (
        <NavigationImplDiv>
            <NavigationLogo/>
            <NavigationLinkItemDiv direction={"END"}>
                {navigationLinks.slice(0, middleIndex).map((link: any, index: number) => (
                        <NavigationLink setUser={setUser} user={user} key={"navigation-link-" + index} href={link.href}
                                        textField={link.name}
                                        needLogin={link.needLogin}/>
                    )
                )}
            </NavigationLinkItemDiv>
            <NavigationLinkItemDiv direction={"START"}>
                {navigationLinks.slice(middleIndex, navigationLinks.length).map((link: any, index: number) => (
                        <NavigationLink setUser={setUser} user={user} key={"navigation-link-" + index} href={link.href}
                                        textField={link.name}
                                        needLogin={link.needLogin}/>
                    )
                )}
            </NavigationLinkItemDiv>
            {user ?
                <LogoutButton onClick={() => window.location.href = "/logout"}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" fill="currentColor">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                        <g>
                            <path
                                d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/>
                        </g>
                    </svg>
                </LogoutButton> : null
            }
        </NavigationImplDiv>
    )

}
