import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface NavigationLogoProps {
    className?: string;
}

let NavigationLogoImg = styled.div`
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
        width: 50px;
    };

    @media (min-width: 992px) {
        width: 55px;
    }

    @media (min-width: 1280px) {
        width: 65px;
    };

    @media (min-width: 1920px) {
        width: 80px;
    };
`

export const FooterLogo: FunctionComponent<NavigationLogoProps> = ({
                                                                           className
                                                                       }) => {
    return (
            <NavigationLogoImg onLoad={() => {
            }
            } onClick={() => {
                window.location.href = "";
            }} className={className}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <g>
                        <path
                            d="M22,16v-2l-8.5-5V3.5C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5V9L2,14v2l8.5-2.5V19L8,20.5L8,22l4-1l4,1l0-1.5L13.5,19 v-5.5L22,16z"/>
                        <path d="M0,0h24v24H0V0z" fill="none"/>
                    </g>
                </svg>
                Airo+
            </NavigationLogoImg>
    );
}
