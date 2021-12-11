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
    width: 100%;

    @media (min-width: 476px) {
        width: 50%;
    }
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
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
    flex-direction: row;

    @media (min-width: 1280px) {
        justify-content: center;
    };
`;

let FooterIconsFlexBoxIcons = styled.ul`
    display: flex;
    flex-direction: row;
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
    width: 100%;
    text-align: center;
    color: white;

    @media (min-width: 476px) {
        width: 25%;
    }
`;

let FooterLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media (min-width: 476px) {
        width: 25%;
    }
`

export const FooterImpl: FunctionComponent<Props> = ({
                                                         className,
                                                         children
                                                     }) => {
    let textLinks = [{href: "/", text: "Home"}, {href: "/gallery", text: "Gallery"}, {
        href: "/contacts",
        text: "Contacts"
    },
        {href: "/myflights", text: "My flights"}, {
            href: "https://gdpr-slovensko.sk/co-je-gdpr/",
            text: "GDPR"
        }, {href: "/faq", text: "FAQ"}]
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
                    <FooterIconsFlexBoxIcons>
                        {iconLinks && iconLinks.map((link: any, index: number) => (
                            <FooterLinkIcon link={link} key={"footer-link-icon-" + index}/>
                        ))}
                    </FooterIconsFlexBoxIcons>
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
