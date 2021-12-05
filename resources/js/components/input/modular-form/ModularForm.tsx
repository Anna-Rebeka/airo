import React, {FunctionComponent, useState} from "react";
import styled from '@emotion/styled';
import {css} from "@emotion/react";

interface Props {
}

let FormWrapper = styled.div<{ shouldBeDisplayed: boolean }>`
    display: ${p => p.shouldBeDisplayed ? "flex" : "none"};
    position: fixed;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(26, 26, 20, 0.8);
    text-align: center;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

let Reg = styled.form`
    display: block;
    text-align: center;
    border: 1px white solid;
    position: relative;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 1);
`;

let MyInput = css`
    text-align: center;
    border: white 1px solid;
    padding: 0;
    width: 200px;
    height: 50px;
    opacity: 1;
    background-color: gray;
    color: orange;
    margin: 10px;
    display: inline-block;
    box-sizing: border-box;

    ::placeholder {
        color: orange;
        font-family: math;
        font-size: 18px;
        opacity: 1;
    }

    [type='submit'] {
        border-radius: 25px;
        background-color: orange;
        color: black;
        font-size: 18px;
        font-family: math;
        cursor: pointer;
    }
`;

let Username = styled.input(MyInput);
let Password = styled.input(MyInput);
let Submit = styled.input(MyInput);

let Close = styled.button`
    position: relative;
    color: red;
    float: right;
    cursor: pointer;
    background-color: rgba(125, 125, 125, 0);
    border: 1px black solid;
    margin: 5px;
    font-size: 1.5em;

    :hover, :focus {
        border-color: white;
    }
`;

let InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

let Title = styled.h1`
    color: white;
    text-align: center;
`

let RegistrationButton = styled.button`
    text-decoration: none;
    border: 0.1em solid white;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    background-color: transparent;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-shadow: 0 5px 8px black;

    :hover {
        color: #FF7F2A;
        border: 0.1em solid #FF7F2A;
    }

    @media (min-width: 772px) {
        font-size: 1.4em;
    }

    @media (min-width: 992px) {
        font-size: 1.6em;
    }

    @media (min-width: 1280px) {
        font-size: 1.8em;
    }

    @media (min-width: 1920px) {
        font-size: 2em;
    }
    transition: background-color 0.2s, color 0.3s;
`;

export const ModularForm: FunctionComponent<Props> = ({}) => {
    let [display, setDisplay] = useState(false);
    let [canClose, setCanClose] = useState(true);
    return (
        <>
            <FormWrapper shouldBeDisplayed={display} onSubmit={(e) => e.preventDefault()} onClick={() => {
                if (canClose) {
                    setDisplay(false);
                }

            }}>
                <Reg id='reg' onMouseEnter={() => setCanClose(false)} onMouseLeave={() => setCanClose(true)}>
                    <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                    <Title> Registration </Title>
                    <InputWrapper>
                        <Username type="text" id="username" name="username" placeholder="User name"/>
                        <Password type="password" id="pw" name="pw" placeholder="Password"/>
                        <Submit type="submit" id="submit" name="submit" value="submit"/>
                    </InputWrapper>
                </Reg>
            </FormWrapper>
            <RegistrationButton id="showBtn" onClick={() => setDisplay(true)}> Registration</RegistrationButton>
        </>
    );
}

export default ModularForm;
