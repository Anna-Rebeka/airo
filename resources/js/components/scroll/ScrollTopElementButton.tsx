import React, {FunctionComponent} from "react";
import {useScrollTop} from "../../hooks/useScrollTop";
import styled from "@emotion/styled";
import {useWindowSizeScrollResize} from "../../BasicUtils";


interface ScrollTopElementProps {
    className?: string;
}

let ScrollTopElementDiv = styled.div<{ breakPoint: boolean }>`
    cursor: pointer;
    position: fixed;
    bottom: 5%;
    right: 2%;
    color: #b80d16;
    font-size: 0.8em;
    text-align: center;
    min-width: 35px;
    background-color: white;
    opacity: ${p => p.breakPoint ? 1 : 0};
    transition: opacity 0.3s linear;
    z-index: 9999;
`

let Icon = styled.img`
    padding: 0.5em;
`;

export const ScrollTopElementButton: FunctionComponent<ScrollTopElementProps> = ({className}) => {
    const [breakPoint] = useWindowSizeScrollResize();
    return (
        <ScrollTopElementDiv breakPoint={breakPoint > 200}>
            <Icon src={require("../../../../public/images/arrow_up.svg").default} onClick={useScrollTop}
                  className={className}/>
        </ScrollTopElementDiv>
    )
}
