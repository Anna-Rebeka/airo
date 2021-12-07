import React, {FunctionComponent, useEffect, useState} from "react";
import styled from '@emotion/styled';
import {css} from "@emotion/react";
import axios from "axios";

interface Props {
    element: any;
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
    setFlightsFrom: any;
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

export const ModularForm: FunctionComponent<Props> = ({shouldBeActivated, element, user, setFlightsFrom}) => {
    let [display, setDisplay] = useState(!!shouldBeActivated);
    let [canClose, setCanClose] = useState(true);
    let [emailAddress, setEmailAddress] = useState<string>();
    let [password, setPassword] = useState<string>();
    let [isRegister, setIsRegister] = useState<boolean>(true);
    let [isComplete, setIsComplete] = useState(false);

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
                                <InputElement type="text" id="firstname" name="firstname" placeholder="First name"
                                              value={firstName}
                                              onChange={(e) => setFirstName(e.target.value)}/>
                                <InputElement type="text" id="lastname" name="lastname" placeholder="Last name"
                                              value={lastName}
                                              onChange={(e) => setLastName(e.target.value)}/>
                                <InputElement type="text" id="username" name="username" placeholder="Email address"
                                              value={emailAddress}
                                              onChange={(e) => setEmailAddress(e.target.value)}/>
                                <InputElement type="password" id="pw" name="pw" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                                <RegistrationButton type="submit" id="submit" name="submit"
                                                    value="submit"> Registration</RegistrationButton>
                                <RegistrationButton id="showBtn" onClick={() => setIsRegister(false)}> Already have
                                    account?</RegistrationButton>
                            </InputWrapper>
                        </Reg> :
                        !isRegister && !userExist ?
                            <Log id='reg' onMouseEnter={() => setCanClose(false)}
                                 onMouseLeave={() => setCanClose(true)}>
                                <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                                <Title> Login </Title>
                                <InputWrapper>
                                    <InputElement type="text" id="username" name="username" placeholder="Email address"
                                                  value={emailAddress}
                                                  onChange={(e) => setEmailAddress(e.target.value)}/>
                                    <InputElement type="password" id="pw" name="pw" placeholder="Password"
                                                  value={password}
                                                  onChange={(e: any) => setPassword(e.target.value)}/>
                                    <RegistrationButton type="submit" id="submit" name="submit"
                                                        value="submit"> Log in</RegistrationButton>
                                    <RegistrationButton id="showBtn" onClick={() => setIsRegister(true)}> Don't have an
                                        account? Create one!</RegistrationButton>
                                </InputWrapper>
                            </Log> :
                            !isComplete ?
                                <Check>
                                    <Close id="hideBtn" onClick={() => setDisplay(false)}>X</Close>
                                    <Title>Check your purchase</Title>
                                    <Text>You are about to buy your selected ticket. Please check details below about
                                        the
                                        ticket.</Text>
                                    <FlexboxInputsCheckout>
                                        <TextCheckout>Departure and arrival
                                            city: {(element && element.departure && element.departure.name) + " -> " + (element && element.arrival && element.arrival.name)} </TextCheckout>
                                        <TextCheckout>Date and time: {element && element.date}</TextCheckout>
                                        <TextCheckout>Price: {element && element.price}e</TextCheckout>
                                        <TextCheckout>Company: {element && element.company && element.company.name + "*".repeat(element && element.company && element.companyClass)}</TextCheckout>
                                        <TextCheckout>Duration and
                                            distance: {element && element.duration + "mins " + element && element.distance + "km"}</TextCheckout>
                                    </FlexboxInputsCheckout>
                                    <Text>Do you want to book?</Text>
                                    <FlexboxInputs>
                                        <ProceedButton id="showBtn0"
                                                       onClick={() => setDisplay(false)}> Cancel</ProceedButton>
                                        <ProceedButton id="showBtn1" onClick={() => {
                                            console.log({
                                                userId: user.id,
                                                token: 'testing',
                                                price: element.price,
                                            });
                                            axios.post('/ticket', {
                                                userId: user.id,
                                                token: 'testing',
                                                price: element.price,
                                            }).then((res) => {
                                                setIsComplete(true);
                                            })
                                        }}> Book</ProceedButton>
                                    </FlexboxInputs>
                                </Check> :
                                <Successful>
                                    <Title>Ticket bought.</Title>
                                    <Text>Your ticket was successfully bought. Thank you for your purchase!</Text>
                                    <RegistrationButton type="submit" id="submit" name="submit"
                                                        value="submit"
                                                        onClick={() => window.location.href = "/"}>Home</RegistrationButton>
                                </Successful>

                }
            </FormWrapper>
            <RegistrationButton id="showBtn" onClick={() => {
                if (!userExist) {
                    setIsRegister(true);
                }
                setDisplay(true);
            }}> Book</RegistrationButton>
        </>
    );
}

export default ModularForm;
