import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {FooterLinkText} from "./FooterLinkText";
import {FooterLinkIcon} from "./FooterLinkIcon";
import {FooterLogo} from "./FooterLogo";

interface Props {
    className?: string;
}

let FooterMainDiv = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: center;
`;

let FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em;
    width: 50%;
`;

let FooterWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;

    max-width: 480px;

    @media (min-width: 476px) {
        flex-direction: row;
        max-width: 530px;
    }

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

    @media (min-width: 1280px) {
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

let Credits = styled.p`
    margin: 1em;
    font-size: 1.5em;
    text-align: center;
    color: white;
`;

let FooterContact = styled.address`
    width: 25%;
    color: white;
`;

let FooterContactParagraph = styled.p`
    color: white;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0.5em;

`;

let FooterLogoWrapper = styled.div`
    width: 25%;
`

export const FooterImpl: FunctionComponent<Props> = ({
                                                         className,
                                                         children
                                                     }) => {
    let textLinks = [{href: "/", text: "Home"}, {href: "/gallery", text: "Gallery"}, {
        href: "/contacts",
        text: "Contacts"
    },
        {href: "/myflights", text: "My flights"}, {href: "/", text: "GDPR"}, {href: "/", text: "ABOUT"}]
    let iconLinks = [{
        href: "/",
        url: require("../../../../public/images/facebook.svg"),
        alt: "Facebook icon"
    }, {href: "/", url: require("../../../../public/images/instagram.svg"), alt: "Instagram icon"}];
    return (
        <FooterMainDiv className={className}>
            <FooterWrapperDiv>
                <FooterLogoWrapper>
                    <FooterLogo/>
                </FooterLogoWrapper>
                <FooterNav>
                    <FooterLinksFlexBox>
                        {textLinks && textLinks.map((link: any, index: number) => (
                            <FooterLinkText key={"footer-link-text-" + index} link={link}/>
                        ))}
                    </FooterLinksFlexBox>
                    <FooterIconsFlexBox>
                        {iconLinks && iconLinks.map((link: any, index: number) => (
                            <FooterLinkIcon link={link} key={"footer-link-icon-" + index}/>
                        ))}
                    </FooterIconsFlexBox>
                </FooterNav>
                <FooterContact>
                    Airline search engine plus<br/>
                    Bratislavská 47<br/>
                    Bratislava<br/>
                </FooterContact>
            </FooterWrapperDiv>
            <Credits>
                Airo Plus Team
            </Credits>
            {children}
        </FooterMainDiv>
    )
}
