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
    left:0;
    right:0;
    top:0;
    /*left: 25vw;*/
    background-color: rgba(125, 125, 125, 0.5);
    text-align: center;
    align-items: center;
    justify-content: center;
`;

let Reg = styled.form`
    display: block;
    text-align: center;
    border: 2px crimson solid;
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
    border: 1px rgba(0, 0, 0, 0) solid;
    margin: 5px;

    :hover, :focus {
        border-color: rgba(125, 125, 125, 1);
    }
`;

export const ModularForm: FunctionComponent<Props> = ({}) => {
    let [display, setDisplay] = useState(false);
    return (
        <>
            <FormWrapper shouldBeDisplayed={display} onSubmit={(e) => e.preventDefault()}>
                <Reg id='reg'>
                    <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                    <h1> Registrácia </h1>
                    <br/>
                    <Username type="text" id="username" name="username" placeholder="User name"></Username>
                    <br/>
                    <Password type="password" id="pw" name="pw" placeholder="Password"></Password>
                    <br/>
                    <Submit type="submit" id="submit" name="submit" value="submit"></Submit>
                </Reg>
            </FormWrapper>
            <button id="showBtn" onClick={() => setDisplay(true)}> Registrácia</button>
        </>
    );
}

export default ModularForm;
