import React, {FunctionComponent, useState} from "react";
import styled from '@emotion/styled';
import {ModularTitle} from "./ModularTitle";

interface Props {
    setDisplay: any;
    title: string;
}

let Background = styled.div`
    display: flex;
    position: fixed;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(26, 26, 20, 0.85);
    text-align: center;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

let Form = styled.form`
    display: block;
    text-align: center;
    border: 1px white solid;
    position: relative;
    width: 80%;
    min-height: 50%;
    background-color: rgba(0, 0, 0, 1);

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
`;

let Close = styled.button`
    position: relative;
    color: red;
    float: right;
    cursor: pointer;
    background-color: transparent;
    border: 1px black solid;
    margin: 0.4em;
    font-size: 1.5em;

    :hover, :focus {
        border-color: white;
    }
`;

export const ModularFormRoot: FunctionComponent<Props> = ({
                                                              setDisplay,
                                                              title,
                                                              children
                                                          }) => {
    let [isOverForm, setIsOverForm] = useState(false);

    return (
        <Background onSubmit={(e) => e.preventDefault()} onClick={() => {
            if (!isOverForm) {
                setDisplay(false);
            }
        }}>
            <Form onMouseOver={() => {
                if (!isOverForm) {
                    setIsOverForm(true);
                }
            }} onMouseOut={() => {
                if (isOverForm) {
                    setIsOverForm(false);
                }
            }}>
                <Close id="hideBtn1" onClick={() => setDisplay(false)}>X</Close>
                <ModularTitle>
                    {title}
                </ModularTitle>
                {children}
            </Form>
        </Background>
    );
}
