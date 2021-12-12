import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    className?: string;
}

let Heading3H = styled.h3`
    font-size: 1.17em;
    color: white;

    @media (min-width: 476px) {
        font-size: 1.27em;
    }

    @media (min-width: 772px) {
        font-size: 1.37em;
    }

    @media (min-width: 992px) {
        font-size: 1.47em;
    }

    @media (min-width: 1280px) {
        font-size: 1.57em;
    }

`

export const Heading3: FunctionComponent<Props> = ({className, children}) => {


    return (
        <Heading3H className={className}>
            {children}
        </Heading3H>
    );
}
