import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface NavigationLogoProps {
    logo: any;
    className?: string;
}

let NavigationLogoImg = styled.img`
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    padding: 8px 20px;
    width: 3em;
    text-shadow: 0 10px 16px black;
    height: auto;
    cursor: pointer;
`

export const NavigationLogo: FunctionComponent<NavigationLogoProps> = ({
                                                                           logo,
                                                                           className
                                                                       }) => {
    return (
        <NavigationLogoImg onLoad={() => {}
        } src={logo && logo.url.default} alt={logo && logo.alt} onClick={() => {}} className={className}/>
    );
}
