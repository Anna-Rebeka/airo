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
                                                                    no

                                                                }) => {
    let [display, setDisplay] = useState(shouldBeActivated);
    let [state, setState] = useState<string>(user ? "LOGGED" : "REGISTER");

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
                                                 setState={setState}/> :
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
