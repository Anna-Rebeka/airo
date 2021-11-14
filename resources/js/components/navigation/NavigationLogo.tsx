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
    width: 50px;
    height: auto;
    cursor: pointer;

    @media (min-width: 772px) {
        width: 60px;
    }

    @media (min-width: 992px) {
        width: 70px;
    }
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
