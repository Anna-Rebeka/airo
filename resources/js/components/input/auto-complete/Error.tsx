import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
}

let ErrorComponent = styled.p`
    color: red;
    font-weight: bold;
    margin: 1em;
`

export const Error: FunctionComponent<Props> = ({children}) => {


    return (
        <ErrorComponent>
            {children}
        </ErrorComponent>
    );
}
