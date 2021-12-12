import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
}

let Heading2H = styled.h2`
    font-size: 1.5em;
    color: white;

    @media (min-width: 476px) {
        font-size: 1.6em;
    }

    @media (min-width: 772px) {
        font-size: 1.7em;
    }

    @media (min-width: 992px) {
        font-size: 1.8em;
    }

    @media (min-width: 1280px) {
        font-size: 1.9em;
    }

`

export const Heading2: FunctionComponent<Props> = ({className, children}) => {


    return (
        <Heading2H className={className}>
            {children}
        </Heading2H>
    );
}
