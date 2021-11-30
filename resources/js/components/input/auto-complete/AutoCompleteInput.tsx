import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {SuggestionList} from "./SuggestionList";
import axios from "axios";

interface Props {
    placeholder?:string;
}

let WrapperDiv = styled.div`
    width: 240px;
    height: 40px;
`

let Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    box-shadow: 2px 3px 8px 1px black;
`

export const AutoCompleteInput: FunctionComponent<Props> = ({placeholder}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
    const [inputListReference, setInputListReference] = useState<any>([]);

    useEffect(() => {
        getAndSetSuggestions();
        return () => {
        };
    }, [input]);

    const onClick = (e: any) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setShowSuggestions(false);
    };

    let getAndSetSuggestions = () => {
        input && input.trim().length !== 0 && axios.get('/from/' + input)
            .then(res => {
                setFilteredSuggestions(res.data);
            })
    }

    const onBlur = (e: any) => {
        if (e.relatedTarget && inputListReference.includes(e.relatedTarget)) {
            return;
        }
        setShowSuggestions(false);
    };

    const onFocus = (e: any) => {
        setShowSuggestions(true);
    }

    const onChange = (e: any) => {
        setInputListReference([]);
        setInput(e.target.value);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
    };

    return (
        <WrapperDiv>
            <Input placeholder={placeholder} onBlur={onBlur} onFocus={onFocus} type="text" onChange={onChange} value={input} onKeyDown={() => {
            }}/>
            {showSuggestions && input && <SuggestionList onClick={onClick} inputListReference={inputListReference}
                                                         filteredSuggestions={filteredSuggestions}/>}
        </WrapperDiv>
    );
};
export default AutoCompleteInput;
