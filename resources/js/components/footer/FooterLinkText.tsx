import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    link: any;
    className?: string;
}

let FooterLinkLi = styled.li`
    list-style: none;
    width: 50%;

    @media (min-width: 772px) {
        width: 33.33333%;
    };

    @media (min-width: 992px) {
        width: 25%;
    };
`;

let FooterLinkTextA = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    color: white;

    :hover {
        color: #FF7F2A;
    }
`;

export const FooterLinkText: FunctionComponent<Props> = ({
                                                             link,
                                                             className,
                                                             children
                                                         }) => {
    return (
        <FooterLinkLi>
            <FooterLinkTextA href={link && link.href} className={className}>
                {link && link.text}
                {children}
            </FooterLinkTextA>
        </FooterLinkLi>
    );
};
