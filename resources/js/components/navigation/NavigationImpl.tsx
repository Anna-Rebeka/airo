import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {NavigationLink} from "./NavigationLink";
import {NavigationLogo} from "./NavigationLogo";

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
    width: 100%;

    @media (min-width: 772px) {
        flex-direction: row;
        flex-wrap: nowrap;
        display: flex;
    }
`;

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
        </NavigationImplDiv>
    )

}
