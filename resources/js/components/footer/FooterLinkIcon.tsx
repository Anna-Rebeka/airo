import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface FooterLinkTextProps {
    link: any;
    className?: string;
}

let FooterFlipLink = styled.a`
    margin: 1em;
    cursor: pointer;
    background: transparent;
    display: inline-block;

    transition: 0.6s linear;

    :hover {
        transition: 0.8s linear;
        transform: rotateY(180deg);
    }
`;

let FooterLinkIconContainer = styled.div`
    transition: 0.6s linear;
    transform-style: preserve-3d;

    position: relative;
    width: 100%;
    height: 100%;
`;

let FooterLinkIconImg = styled.img`
    transition: font-size 1s;
    width: 26px;
    height: 26px;

    @media (min-width: 772px) {
        width: 28px;
        height: 28px;
    };

    @media (min-width: 992px) {
        width: 32px;
        height: 32px;;
    };

    @media (min-width: 1280px) {
        width: 36px;
        height: 36px;
    };
`;


export const FooterLinkIcon: FunctionComponent<FooterLinkTextProps> = ({link, className, children}) => {
    return (
        <FooterFlipLink href={link && link.href} className={className}>
            <FooterLinkIconContainer>
                <FooterLinkIconImg src={link && link.url.default} alt={link && link.alt}/>
            </FooterLinkIconContainer>
            {children}
        </FooterFlipLink>
    );
};
