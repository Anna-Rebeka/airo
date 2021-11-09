import {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import React from 'react';

interface Props {
    backgroundColor: string
    className?: string
}

let Navigation = styled.div<{ backgroundColor: string }>`
    top: 0;
    width: 100%;
    z-index: 9999;
    position: fixed;
    background-color: ${p => p.backgroundColor};
`

export const NavigationCore: FunctionComponent<Props> = (props) => {
    return (
        <Navigation className={props.className} backgroundColor={props.backgroundColor}>
            {props.children}
        </Navigation>
    );
}
