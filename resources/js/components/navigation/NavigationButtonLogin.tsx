import React, {FunctionComponent, useEffect, useState} from "react";
import styled from '@emotion/styled';
import {css} from "@emotion/react";
import axios from "axios";

interface Props {
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
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
    width: 80%;
    max-height: 60%;
    background-color: rgba(0, 0, 0, 1);

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
`;

let Check = styled.form`
    display: block;
    text-align: center;
    border: 1px white solid;
    position: relative;
    width: 80%;
    max-height: 60%;
    background-color: rgba(0, 0, 0, 1);

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
`;

let Successful = styled.form`
    display: block;
    text-align: center;
    border: 1px white solid;
    position: relative;
    width: 80%;
    max-height: 60%;
    background-color: rgba(0, 0, 0, 1);

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
`;

let Log = styled.form`
    display: block;
    text-align: center;
    border: 1px white solid;
    position: relative;
    height: 50%;
    width: 80%;
    background-color: rgba(0, 0, 0, 1);

    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
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

let Text = styled.p`
    color: white;
    text-align: center;
`

let TextCheckout = styled.p`
    color: white;
    text-align: center;
    margin: 0;
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

    :not(:last-of-type) {
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

let ProceedButton = styled.button`
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

let FlexboxInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

let FlexboxInputsCheckout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

let NavigationLinkButton = styled.button<{ activated: boolean }>`
    cursor: pointer;
    color: white;
    text-decoration: none;
    letter-spacing: 0.07em;
    display: inline-block;
    transition: font-size 1.3s, color 0.5s;
    font-size: 1em;
    background-color: transparent;
    border: 0;

    :after {
        background: none repeat scroll 0 0 #FF7F2A;
        content: "";
        display: block;
        height: 2px;
        width: ${p => p.activated ? 100 : 0};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    @media (min-width: 772px) {
        font-size: 1.3em;
    };

    @media (min-width: 1060px) {
        font-size: 1.6em;
    };

    @media (min-width: 1280px) {
        font-size: 2em;
    };

    @media (min-width: 1920px) {
        font-size: 2.4em;
    };

    :hover {
        color: #FF7F2A;
    }

    :hover:after {
        width: 100%;
        left: 0;
    }
`

export const NavigationButtonLogin: FunctionComponent<Props> = ({
                                                                    shouldBeActivated,
                                                                    user
                                                                }) => {
    let [display, setDisplay] = useState(!!shouldBeActivated);
    let [canClose, setCanClose] = useState(true);
    let [emailAddress, setEmailAddress] = useState<string>();
    let [password, setPassword] = useState<string>();
    let [isRegister, setIsRegister] = useState<boolean>(true);

    let [firstName, setFirstName] = useState<string>();
    let [lastName, setLastName] = useState<string>();

    let [userExist, setUserExist] = useState(user !== null);

    useEffect(() => {
        setUserExist(user);
    }, [user])

    return (
        <>
            <FormWrapper shouldBeDisplayed={display} onSubmit={(e) => e.preventDefault()} onClick={() => {
                if (canClose) {
                    setDisplay(false);
                }
            }}>
                {
                    isRegister && !userExist ?
                        <Reg id='reg' onTouchStart={() => setCanClose(false)} onMouseEnter={() => setCanClose(false)}
                             onMouseLeave={() => setCanClose(true)}>
                            <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                            <Title> Registration </Title>
                            <InputWrapper>
                                <InputElement type="text" id="firstname_0" name="firstname" placeholder="First name"
                                              value={firstName}
                                              onChange={(e) => setFirstName(e.target.value)}/>
                                <InputElement type="text" id="lastname_0" name="lastname" placeholder="Last name"
                                              value={lastName}
                                              onChange={(e) => setLastName(e.target.value)}/>
                                <InputElement type="text" id="username_0" name="username" placeholder="Email address"
                                              value={emailAddress}
                                              onChange={(e) => setEmailAddress(e.target.value)}/>
                                <InputElement type="password" id="pw_0" name="pw" placeholder="Password"
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                                <RegistrationButton type="submit" id="submit_0" name="submit"
                                                    value="submit"
                                                    onClick={() => axios.post("/register", {
                                                        first_name: firstName,
                                                        last_name: lastName,
                                                        password: password,
                                                        email: emailAddress
                                                    })}> Registration</RegistrationButton>
                                <RegistrationButton id="showBtn_0" onClick={() => setIsRegister(false)}> Already have
                                    account?</RegistrationButton>
                            </InputWrapper>
                        </Reg> :
                        !isRegister && !userExist ?
                            <Log id='reg' onMouseEnter={() => setCanClose(false)}
                                 onMouseLeave={() => setCanClose(true)}>
                                <Close id="hideBtn1" onClick={() => setDisplay(false)}>X</Close>
                                <Title> Login </Title>
                                <InputWrapper>
                                    <InputElement type="text" id="username1" name="username" placeholder="Email address"
                                                  value={emailAddress}
                                                  onChange={(e) => setEmailAddress(e.target.value)}/>
                                    <InputElement type="password" id="pw1" name="pw" placeholder="Password"
                                                  value={password}
                                                  onChange={(e: any) => setPassword(e.target.value)}/>
                                    <RegistrationButton type="submit" id="submit1" name="submit"
                                                        value="submit"> Log in</RegistrationButton>
                                    <RegistrationButton id="showBtn1" onClick={() => setIsRegister(true)}> Don't have an
                                        account? Create one!</RegistrationButton>
                                </InputWrapper>
                            </Log> : null
                }
            </FormWrapper>
                <NavigationLinkButton activated={false} id="showBtn" onClick={() => {
                    if (!userExist) {
                        setIsRegister(true);
                    }
                    setDisplay(true);
                }}> My flights</NavigationLinkButton>
        </>
    );
}

export default NavigationButtonLogin;
