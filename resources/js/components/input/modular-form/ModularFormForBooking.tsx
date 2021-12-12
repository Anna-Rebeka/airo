import React, {FunctionComponent, useState} from "react";
import styled from '@emotion/styled';
import {ModularFormRegisterImpl} from "./ModularFormRegisterImpl";
import {ModularFormCheckoutImpl} from "./ModularFormCheckoutImpl";
import {ModularFormLoginImpl} from "./ModularFormLoginImpl";
import {ModularButton} from "./ModularButton";

interface Props {
    element: any;
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
    withActivationButton: boolean;
    no: number;
    oneWay: boolean;
    step: number;
    flightsFrom: any;
    flightsTo: any;
}

// je reprezentovany orazovym ?, po nadideni zobrazi text "hint"
let ToolTip = styled.text<{ hint: string }>`
    color: orange;
    margin: 0 0 0 5px;
    content: '';
    display: inline;
    font-weight: bold;

    :before {
        display: inline;
        content: '';
    }

    :after {
        display: inline;
        content: '?';
    }

    :hover {
        /* cursor: normal; <-- nefunguje */
        display: inline;
        content: '';
    }

    :hover:before {
        display: none;
        content: '';
    }

    :hover:after {
        display: inline;
        content: ${h => h.hint};
    }
`;

export const ModularFormForBooking: FunctionComponent<Props> = ({

                                                                    setUser,
                                                                    shouldBeActivated,
                                                                    element,
                                                                    user,
                                                                    withActivationButton,
                                                                    no,
                                                                    oneWay,
                                                                    step,
                                                                    flightsFrom,
                                                                    flightsTo

                                                                }) => {
    let [display, setDisplay] = useState(shouldBeActivated);
    let [state, setState] = useState<string>(user ? "LOGGED" : "REGISTER");


    let ValidateFName = function (entry: string): boolean {
        // na zaciatku velke pismeno, zvysok male pismena. ziadne specialne znaky (-)
        let regex = '^[A-Z][a-z]+';
        let result = entry.match(regex);
        return result != null && result[0] == result.input;

    }

    let ValidateLName = function (entry: string) {
        // na zaciatku velke pismeno, zvysok male pismena alebo specialne znaky (-, \\s)
        let regex = '[A-Z][a-z]+\\s?[-]?\\s?[A-Za-z]+';
        let result = entry.match(regex);
        return result != null && result[0] == result.input;
    }
    let ValidateEmail = function (entry: string): boolean {
        /*'[a-zA-Z0-9-._,?*+]+';   <-- username check, since it is email, different is used */
        //na ziaciatku pismena+cisla, niekde @ za nim pismena+cisla, ., domena 2-5 znakov
        let regex = '^[a-zA-Z0-9].*[@][a-zA-Z0-9]+.[a-z]{2,5}$';
        let result = entry?.match(regex);
        return result != null && result[0] == result.input;


    }
    let ValidatePW = function (entry: string) {
        // musi obsahovat aspon 1 cislo, aspon 1 velke pismeno a mat aspon 8 znakov dlzku
        let regex = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[A-Z])[A-Za-z\\d]{8,}$";
        let result = entry.match(regex);
        return result != null && result[0] == result.input;

    }

    return (
        <>
            {display ?
                (!user && state === "REGISTER" ?
                    <ModularFormRegisterImpl bookingWithoutRegistration={true} setState={setState} displayForm={display}
                                             setDisplay={setDisplay}/> :
                    state === "CHECKOUT" || state === "LOGGED" || state === "CHECKOUT_NOT_REGISTERED" ?
                        <ModularFormCheckoutImpl state={state} no={no} user={user} displayForm={display}
                                                 setDisplay={setDisplay}
                                                 element={element}
                                                 setState={setState}
                                                 oneWay={oneWay}
                                                 step={step}
                                                 flightsFrom={flightsFrom}
                                                 flightsTo={flightsTo}
                                                 /> :
                        state === "LOGIN" ?
                            <ModularFormLoginImpl bookingWithoutRegistration={true} setUser={setUser}
                                                  setState={setState} setDisplay={setDisplay}/>
                            : null)
                :
                null
            }
            {
                withActivationButton ?
                    <ModularButton type={"submit"} name={"book"} value={"book"}
                                   text={"Book"} id="bookATicket"
                                   setOnClickValueMethod={() => {
                                       if (user) {
                                           setState("LOGGED");
                                       } else {
                                           setState("REGISTER");
                                       }
                                       setDisplay(true);
                                   }}/>
                    : null
            }
        </>
    );
}

export default ModularFormForBooking;
