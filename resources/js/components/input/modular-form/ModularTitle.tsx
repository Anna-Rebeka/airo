import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
}


let Title = styled.h1`
    color: white;
    text-align: center;
`

export const ModularTitle: FunctionComponent<Props> = ({children}) => {


    return (
        <Title>
            {children}
        </Title>
    );
}
