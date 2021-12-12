import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {SuggestionList} from "./SuggestionList";
import axios from "axios";

interface Props {
    placeholder?: string;
    setMethod: any;
    isError: boolean;
}

let MainDiv = styled.div`
    position: relative;
`

let Input = styled.input<{ isWrongInput: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 1.12em;

    :not(:focus) {
        border: ${p => p.isWrongInput ? "red" : "white"} solid 1px;
    }


    :focus {
        outline: ${p => p.isWrongInput ? "red" : "blue"} 1px solid;
    }

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

export const AutoCompleteInput: FunctionComponent<Props> = ({placeholder, setMethod, isError}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
    const [inputListReference, setInputListReference] = useState<any>([]);
    const [isWrongInput, setIsWrongInput] = useState<boolean>(false);

    useEffect(() => {
        getAndSetSuggestions();
        return () => {
        };
    }, [input]);


    useEffect(() => {
        if (isError) {
            setIsWrongInput(true);
        } else {
            setIsWrongInput(false);
        }
        return () => {
        };
    }, [isError]);

    const onClick = (e: any) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setMethod(e.target.innerText);
        setShowSuggestions(false);
        setIsWrongInput(false);
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

        let val = e.target.value;
        if (val && val.length > 0) {
            val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        }

        setInputListReference([]);
        setInput(val);
        setFilteredSuggestions(filteredSuggestions);
        if (checkFilteredSuggestions(val)) {
            setIsWrongInput(false);
            setMethod(val)
        } else {
            setIsWrongInput(true);
            setMethod("");
        }
        setShowSuggestions(true);
    };

    const checkFilteredSuggestions = (currentCity: string) => {
        return filteredSuggestions && Object.values(filteredSuggestions).some((city: any) => city.name === currentCity);
    };

    return (
        <MainDiv>
            <Input isWrongInput={isWrongInput} placeholder={placeholder} onBlur={onBlur} onFocus={onFocus} type="text"
                   onChange={onChange}
                   value={input} onKeyDown={() => {
            }}/>
            {showSuggestions && input && <SuggestionList onClick={onClick} inputListReference={inputListReference}
                                                         filteredSuggestions={filteredSuggestions}/>}
        </MainDiv>
    );
}

export default AutoCompleteInput;
