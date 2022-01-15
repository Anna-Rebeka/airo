import React, {FunctionComponent, useState} from "react";
import {ModularFormRegisterImpl} from "./ModularFormRegisterImpl";
import {ModularFormLoginImpl} from "./ModularFormLoginImpl";
import {ModularButton} from "./ModularButton";
import {ModularFormCheckoutImplRoundTrip} from "./ModularFormCheckoutImplRoundTrip";

interface Props {
    flights: any;
    price: number;
    distance: number;
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
    withActivationButton: boolean;
    no: number;
}

export const ModularFormForBookingRoundTrip: FunctionComponent<Props> = ({
                                                                             setUser,
                                                                             shouldBeActivated,
                                                                             user,
                                                                             withActivationButton,
                                                                             no,
                                                                             flights,
                                                                             price,
                                                                             distance
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
                        <ModularFormCheckoutImplRoundTrip state={state}
                                                          no={no} user={user}
                                                          displayForm={display}
                                                          setDisplay={setDisplay}
                                                          element={{flights: flights, distance: distance, price: price}}
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
                    <>
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
                    </>

                    : null
            }
        </>
    );
}

export default ModularFormForBookingRoundTrip;
