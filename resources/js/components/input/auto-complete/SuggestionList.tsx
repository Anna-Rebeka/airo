import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    filteredSuggestions: any;
    inputListReference: any;
    onClick: any
}

let Wrapper = styled.ul`
    padding: 0;
    margin: 0.2em 0 0 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 2px 3px 8px 1px black;
`

let ElementInList = styled.li`
    list-style: none;
    cursor: pointer;
    color: black;
    font-size: 1.2em;

    :hover {
        background-color: #FF7F2A;
    }
`

let MainWrapper = styled.div`
    position: absolute;
    overflow: auto;
    max-height: 150px;
    width: 100%;
`;

export const SuggestionList: FunctionComponent<Props> = ({filteredSuggestions, inputListReference, onClick}) => {
    return (
        <MainWrapper>
            {(filteredSuggestions && filteredSuggestions.length > 0) ?
                <Wrapper>
                    {filteredSuggestions.map((suggestion: any, index: number) => (
                            <ElementInList ref={(ref) => {
                                inputListReference.push(ref)
                            }} tabIndex={0} key={index} onClick={onClick}>
                                {suggestion && suggestion.name}
                            </ElementInList>
                        )
                    )}
                </Wrapper> : null
            }
        </MainWrapper>
    )
}
