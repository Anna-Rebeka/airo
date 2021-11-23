import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {SuggestionList} from "./SuggestionList";
import axios from "axios";

interface Props {

}

let WrapperDiv = styled.div`
    min-width: 200px;
    max-width: 500px;
    width: 20%;
    height: 30px;
`

let Input = styled.input`
    width: 100%;
    height: 100%;
    box-shadow: 2px 3px 8px 1px black;
`

export const AutoCompleteInput: FunctionComponent<Props> = ({}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
    const [inputListReference, setInputListReference] = useState<any>([]);

    useEffect(() => {
        let getSuggestions = () => {
            axios.get('/from/'+ input)
                .then(res => {
                    const posts = res.data;
                    setFilteredSuggestions(filteredSuggestions);
                })
        }
        return () => getSuggestions();
    }, [input]);

    const onClick = (e: any) => {
        //console.log(e);
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setShowSuggestions(false);
    };

    const onBlur = (e: any) => {
        if (e.relatedTarget && inputListReference.includes(e.relatedTarget)) {
            return;
        }
        setFilteredSuggestions([]);
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
            <Input onBlur={onBlur} onFocus={onFocus} type="text" onChange={onChange} value={input} onKeyDown={() => {
            }}/>
            {showSuggestions && input && <SuggestionList onClick={onClick} inputListReference={inputListReference}
                                                         filteredSuggestions={filteredSuggestions}/>}
        </WrapperDiv>
    );
};
export default AutoCompleteInput;
