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
    background: rgba(26, 26, 20, 0.85);
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
    max-height: 60%;
    background-color: rgba(0, 0, 0, 1);
`;

let Log = styled.form`
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
    background: white;
    margin: 10px;
    display: inline-block;
    box-sizing: border-box;

    [type='submit'] {
        border-radius: 25px;
        background-color: orange;
        color: black;
        font-size: 18px;
        font-family: math;
        cursor: pointer;
    }
`;

let InputElement = styled.input(MyInput);

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

    :not(:last-of-type){
        margin-top: 0.4em;
    }

    margin-bottom: 0.4em;

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
    let [username, setUsername] = useState<string>();
    let [password, setPassword] = useState<string>();
    let [isRegister, setIsRegister] = useState<boolean>(true);

    let [firstName, setFirstName] = useState<string>();
    let [lastName, setLastName] = useState<string>();

    return (
        <>
            <FormWrapper shouldBeDisplayed={display} onSubmit={(e) => e.preventDefault()} onClick={() => {
                if (canClose) {
                    setDisplay(false);
                }
            }}>
                {
                    isRegister ?
                        <Reg id='reg' onMouseEnter={() => setCanClose(false)} onMouseLeave={() => setCanClose(true)}>
                            <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                            <Title> Registration </Title>
                            <InputWrapper>
                                <InputElement type="text" id="firstname" name="firstname" placeholder="First name"
                                              value={firstName}
                                              onChange={(e) => setFirstName(e.target.value)}/>
                                <InputElement type="text" id="lastname" name="lastname" placeholder="Last name"
                                              value={lastName}
                                              onChange={(e) => setLastName(e.target.value)}/>
                                <InputElement type="text" id="username" name="username" placeholder="User name"
                                              value={username}
                                              onChange={(e) => setUsername(e.target.value)}/>
                                <InputElement type="password" id="pw" name="pw" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                                <RegistrationButton type="submit" id="submit" name="submit"
                                                    value="submit"> Registration</RegistrationButton>
                                <RegistrationButton id="showBtn" onClick={() => setIsRegister(false)}> Already have
                                    account?</RegistrationButton>
                            </InputWrapper>
                        </Reg> :
                        <Log id='reg' onMouseEnter={() => setCanClose(false)} onMouseLeave={() => setCanClose(true)}>
                            <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                            <Title> Login </Title>
                            <InputWrapper>
                                <InputElement type="text" id="username" name="username" placeholder="User name"
                                              value={username}
                                              onChange={(e) => setUsername(e.target.value)}/>
                                <InputElement type="password" id="pw" name="pw" placeholder="Password" value={password}
                                              onChange={(e: any) => setPassword(e.target.value)}/>
                                <RegistrationButton type="submit" id="submit" name="submit"
                                                    value="submit"> Log in</RegistrationButton>
                                <RegistrationButton id="showBtn" onClick={() => setIsRegister(true)}> Don't have an
                                    account? Create one!</RegistrationButton>
                            </InputWrapper>
                        </Log>
                }
            </FormWrapper>
            <RegistrationButton id="showBtn" onClick={() => {
                setIsRegister(true);
                setDisplay(true);
            }}> Registration</RegistrationButton>
        </>
    );
}

export default ModularForm;
