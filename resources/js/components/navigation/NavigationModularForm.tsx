import React, {FunctionComponent, useState} from "react";
import {ModularFormRegisterImpl} from "../input/modular-form/ModularFormRegisterImpl";
import {ModularFormLoginImpl} from "../input/modular-form/ModularFormLoginImpl";
import {NavigationLinkButton} from "./NavigationLinkButton";

interface Props {
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
}


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
            <NavigationLinkButton text={"My flights"} activated={false} onClick={() => {
                setDisplay(true);
            }}/>
        </>
    );
}
