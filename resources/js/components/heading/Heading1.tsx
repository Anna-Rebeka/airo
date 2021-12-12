import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?:string;
}

const Heading1H = styled.h1`
    font-size: 2em;
    color: white;

    @media (min-width: 476px) {
        font-size: 2.1em;
    }

    @media (min-width: 772px) {
        font-size: 2.2em;
    }

    @media (min-width: 992px) {
        font-size: 2.3em;
    }

    @media (min-width: 1280px) {
        font-size: 2.4em;
    }
`

export const Heading1: FunctionComponent<Props> = ({className, children}) => {


    return (
        <Heading1H className={className}>
            {children}
        </Heading1H>
    );
}
