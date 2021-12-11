import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
}

let InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ModularFormInputWrapper: FunctionComponent<Props> = ({children}) => {


    return (
        <InputWrapper>
            {children}
        </InputWrapper>
    );
}
