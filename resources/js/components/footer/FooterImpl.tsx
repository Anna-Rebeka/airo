import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {FooterLinkText} from "./FooterLinkText";
import {FooterLinkIcon} from "./FooterLinkIcon";

interface Props {
    textLinks: any | null;
    iconLinks: any | null;
    className?: string;
}

let FooterMainDiv = styled.div`
    background-color: black;
`;

let FooterNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;

let FooterWrapperDiv = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 4.5em 3em 2.5em 3em;

    max-width: 540px;

    @media (min-width: 772px) {
        max-width: 730px;
    };

    @media (min-width: 992px) {
        max-width: 960px;
    };

    @media (min-width: 1280px) {
        max-width: 1280px;
    };

`

let FooterLinksFlexBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (min-width: 772px) {
        width: 65%;
        justify-content: center;
    };

    @media (min-width: 992px) {
        width: 50%;
        justify-content: center;
    };

    @media (min-width: 1280px) {
        width: 35%;
        justify-content: center;
    };
`;

let FooterIconsFlexBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
`;

let Credits = styled.div`
    margin: 2em;
    text-align: center;
    font-family: "Arial", serif;
    color: white;
`;

export const FooterImpl: FunctionComponent<Props> = ({
                                                         textLinks,
                                                         iconLinks,
                                                         className,
                                                         children
                                                     }) => {
    return (
        <FooterMainDiv className={className}>
            <FooterWrapperDiv>
                <FooterNav>
                    <FooterLinksFlexBox>
                        {textLinks && textLinks.map((link: any, index: number) => (
                            <FooterLinkText key={"footer-link-text-" + index} link={link}/>
                        ))}
                    </FooterLinksFlexBox>
                </FooterNav>
                <FooterIconsFlexBox>
                    {iconLinks && iconLinks.map((link: any, index: number) => (
                        <FooterLinkIcon link={link} key={"footer-link-icon-" + index}/>
                    ))}
                </FooterIconsFlexBox>
                <Credits>
                    Airo Plus Team
                </Credits>
            </FooterWrapperDiv>
            {children}
        </FooterMainDiv>
    )
}