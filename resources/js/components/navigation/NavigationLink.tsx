import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface NavigationLinkProps {
    href: string;
    textField: string;
    className?: string;
}

let NavigationLinkLi = styled.li`
    list-style: none;
    display: block;
    padding: 8px 20px;
`

let NavigationLinkA = styled.a<{ activated: boolean }>`
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.07em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 2em;

    :after {
        background: none repeat scroll 0 0 white;
        content: "";
        display: block;
        height: 2px;
        width: ${p => p.activated ? 100 : 0};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    :hover {
        color: white;
    }

    :hover:after {
        width: 100%;
        left: 0;
    }
`

export const NavigationLink: FunctionComponent<NavigationLinkProps> = ({href, className, textField}) => {
    return (
        <NavigationLinkLi>
            <NavigationLinkA activated={textField == "ONE"} href={href} className={className}>
                {textField}
            </NavigationLinkA>
        </NavigationLinkLi>

    );
}
