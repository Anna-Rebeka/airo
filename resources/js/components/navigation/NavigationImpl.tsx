import {FunctionComponent} from "react";
import styled from "@emotion/styled";
import React from 'react';
import {NavigationLink} from "./NavigationLink";
import {NavigationLogo} from "./NavigationLogo";
import {ButtonHref} from "../button/ButtonHref";

interface Props {
    logo: any;
    className?: string;
}

let NavigationImplDiv = styled.nav`
    background-color: black;
    box-shadow: 2px 3px 8px 1px black;
    top: 0;
    z-index: 9999;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
`

let NavigationLinkItemDiv = styled.ul<{ direction: string }>`
    display: none;
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

let NavigationButtonsWrapper = styled.li`
    list-style: none;
`

let NavigationButtons = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
`

export const NavigationImpl: FunctionComponent<Props> = ({
                                                             children,
                                                         }) => {
    let navigationLinks = ["ONE", "TWO", "THREE", "FOUR"];
    let middleIndex: number = navigationLinks ? Math.floor(navigationLinks.length / 2) : 0;
    return (
        <NavigationImplDiv>
            <NavigationLinkItemDiv direction={"END"}>
                {navigationLinks.slice(0, middleIndex).map((textField: any, index: number) => (
                        <NavigationLink key={"navigation-link-" + index} href={"/"} textField={textField}/>
                    )
                )}
            </NavigationLinkItemDiv>
            <NavigationLogo logo={{url: require("../../airplane.svg"), href: "airplane"}}/>

            <NavigationLinkItemDiv direction={"START"}>
                {navigationLinks.slice(middleIndex, navigationLinks.length).map((textField: any, index: number) => (
                        <NavigationLink key={"navigation-link-" + index} href={"/"} textField={textField}/>
                    )
                )}
                <NavigationButtonsWrapper>
                    <NavigationButtons>
                        <ButtonHref key={"navigation-link-login"} href={"/login"} text={"Log in"}/>
                        <ButtonHref key={"navigation-link-signup"} href={"/register"} text={"Sign up"}/>
                    </NavigationButtons>
                </NavigationButtonsWrapper>
            </NavigationLinkItemDiv>
            {children}
        </NavigationImplDiv>
    );
}