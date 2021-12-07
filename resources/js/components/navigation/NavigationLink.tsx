import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import NavigationButtonLogin from "./NavigationButtonLogin";

interface NavigationLinkProps {
    user: any;
    href: string;
    textField: string;
    needLogin: boolean;
    className?: string;
    setUser: any;
}

let NavigationLinkLi = styled.li`
    list-style: none;
    display: block;
    padding: 8px 20px;
`

let NavigationLinkA = styled.a<{ activated: boolean }>`
    cursor: pointer;
    color: white;
    text-decoration: none;
    letter-spacing: 0.07em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 1em;

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
        font-size: 2em;
    };

    @media (min-width: 1920px) {
        font-size: 2.4em;
    };

    :hover {
        color: #FF7F2A;
    }

    :hover:after {
        width: 100%;
        left: 0;
    }
`

export const NavigationLink: FunctionComponent<NavigationLinkProps> = ({
                                                                           href,
                                                                           className,
                                                                           textField,
                                                                           user,
                                                                           needLogin,
                                                                           setUser
                                                                       }) => {
    return (
        <NavigationLinkLi>
            {(needLogin && user == null) ?
                <NavigationButtonLogin user={user} setUser={setUser}>
                    {textField}
                </NavigationButtonLogin> :
                <NavigationLinkA activated={textField == "ONE"} href={href} className={className}>
                    {textField}
                </NavigationLinkA>}
        </NavigationLinkLi>
    );
}
