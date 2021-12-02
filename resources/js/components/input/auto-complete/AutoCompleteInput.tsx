import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {SuggestionList} from "./SuggestionList";
import axios from "axios";

interface Props {
    placeholder?: string;
}

let Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 1.12em;
    border: white solid 1px;

    @media (min-width: 576px) {
        font-size: 1.17em;
    }
    @media (min-width: 768px) {
        font-size: 1.22em;
    }
    @media (min-width: 992px) {
        font-size: 1.28em;
    }

    @media (min-width: 1600px) {
        font-size: 1.38em;
    }

`

export const AutoCompleteInput: FunctionComponent<Props> = ({placeholder}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
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
        <>
            <Input placeholder={placeholder} onBlur={onBlur} onFocus={onFocus} type="text" onChange={onChange}
                   value={input} onKeyDown={() => {
            }}/>
            {showSuggestions && input && <SuggestionList onClick={onClick} inputListReference={inputListReference}
                                                         filteredSuggestions={filteredSuggestions}/>}
        </>
    );
};
export default AutoCompleteInput;
