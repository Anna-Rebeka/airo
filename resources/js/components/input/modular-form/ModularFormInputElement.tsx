import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";

interface Props {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    value: string;
    setOnChangeValueMethod: any;
}

let ModularFormInput = styled.input`
    text-align: center;
    border: white 1px solid;
    padding: 0;
    width: 200px;
    height: 50px;
    opacity: 1;
    background: white;
    margin: 10px;
    display: inline-block;
    box-sizing: border-box;
`


export const ModularFormInputElement: FunctionComponent<Props> = ({
                                                                      type,
                                                                      id,
                                                                      setOnChangeValueMethod,
                                                                      value,
                                                                      name,
                                                                      placeholder,
                                                                      children
                                                                  }) => {

    let [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value])
    return (
        <ModularFormInput type={type} id={id} value={inputValue} name={name} placeholder={placeholder}
                          onChange={(e) => setOnChangeValueMethod(e.target.value)}>
            {children}
        </ModularFormInput>
    );
}
