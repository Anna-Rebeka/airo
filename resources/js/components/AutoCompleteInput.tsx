import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {SuggestionList} from "./SuggestionList";

interface Props {
    suggestions: string[];
}

let WrapperDiv = styled.div`
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 20%;
    height: 30px;
`

let Input = styled.input`
    width: 100%;
    height: 100%;
    box-shadow: 2px 3px 8px 1px black;
`

export const AutoCompleteInput: FunctionComponent<Props> = ({suggestions}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const onClick = (e: any) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setShowSuggestions(false);
    };

    const onChange = (e: any) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked: any = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setShowSuggestions(true);
    };

    return (
        <WrapperDiv>
            <Input type="text" onClick={onClick} onChange={onChange} value={input} onKeyDown={() => {
            }}/>
            {showSuggestions && input && <SuggestionList filteredSuggestions={filteredSuggestions}/>}
        </WrapperDiv>
    );
};
export default AutoCompleteInput;
