import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {Error} from "../auto-complete/Error";

interface Props {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    value: string;
    setOnChangeValueMethod: any;
    errorMessage: string;
    setIsWrongParentMethod: any;
    isWrongFromParent: boolean;
    validatorMethodIsValid: any;
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
                                                                      children,
                                                                      errorMessage,
                                                                      isWrongFromParent,
                                                                      setIsWrongParentMethod,
                                                                      validatorMethodIsValid,
                                                                  }) => {
    let [inputValue, setInputValue] = useState(value);
    let [isWrong, setIsWrong] = useState<boolean>(false);

    useEffect(() => {
        setInputValue(value);
    }, [value])

    useEffect(() => {
        setIsWrong(isWrongFromParent);
    }, [isWrongFromParent])

    return (
        <>
            <ModularFormInput type={type} id={id} value={inputValue} name={name} placeholder={placeholder}
                              onChange={(e) => {
                                  setOnChangeValueMethod(e.target.value);

                                  if(validatorMethodIsValid && setIsWrongParentMethod){
                                      if (!validatorMethodIsValid(e.target.value)) {
                                          setIsWrongParentMethod(true);
                                      } else {
                                          setIsWrongParentMethod(false);
                                      }
                                  }
                              }}>
                {children}
            </ModularFormInput>
            {isWrong ?
                <Error>
                    {errorMessage}
                </Error> :
                null
            }
        </>

    );
}
