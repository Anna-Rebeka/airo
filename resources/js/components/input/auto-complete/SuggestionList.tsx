import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    filteredSuggestions: any;
    inputListReference: any;
    onClick: any
}

let Wrapper = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 2px 3px 8px 1px black;
`

let ElementInList = styled.li`
    list-style: none;
    cursor: pointer;

    :hover {
        background-color: #89CFF0;
        color: black;
    }

`

export const SuggestionList: FunctionComponent<Props> = ({filteredSuggestions, inputListReference, onClick}) => {
    return (
        <>
            {(filteredSuggestions && filteredSuggestions.length > 0) ?
                <Wrapper>
                    {filteredSuggestions.map((suggestion: string, index: number) => (
                            <ElementInList ref={(ref) => {
                                inputListReference.push(ref)
                            }} tabIndex={0} key={suggestion + index} onClick={onClick}>
                                {suggestion}
                            </ElementInList>
                        )
                    )}
                </Wrapper> : null
            }
        </>
    )
}
