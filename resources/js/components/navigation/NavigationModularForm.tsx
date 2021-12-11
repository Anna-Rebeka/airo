import React, {FunctionComponent, useState} from "react";
import {ModularFormRegisterImpl} from "../input/modular-form/ModularFormRegisterImpl";
import {ModularFormLoginImpl} from "../input/modular-form/ModularFormLoginImpl";
import styled from "@emotion/styled";

interface Props {
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
}

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

export const NavigationModularForm: FunctionComponent<Props> = ({
                                                                    setUser,
                                                                    shouldBeActivated,
                                                                    user
                                                                }) => {
    let [display, setDisplay] = useState(shouldBeActivated);
    let [state, setState] = useState<string>(user ? "LOGGED" : "REGISTER");

    return (
        <>
            {display ?
                !user && state === "REGISTER" ?
                    <ModularFormRegisterImpl bookingWithoutRegistration={false} setState={setState}
                                             displayForm={display} setDisplay={setDisplay}/> :
                    state === "LOGIN" ?
                        <ModularFormLoginImpl bookingWithoutRegistration={false}
                                              additionalLoginOnClickMethod={() => window.location.href = "/myflights"}
                                              setUser={setUser} setState={setState} setDisplay={setDisplay}/> :
                        null :
                null
            }
            <NavigationLinkButton activated={false} id="showBtn" onClick={() => {
                setDisplay(true);
            }}> My flights</NavigationLinkButton>
        </>
    );
}
