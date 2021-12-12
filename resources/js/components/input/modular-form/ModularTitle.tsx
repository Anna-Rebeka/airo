import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading1} from "../../heading/Heading1";

interface Props {
}

let Title = styled(Heading1)`
    text-align: center;
`

export const ModularTitle: FunctionComponent<Props> = ({children}) => {


    return (
        <Title>
            {children}
        </Title>
    );
}
