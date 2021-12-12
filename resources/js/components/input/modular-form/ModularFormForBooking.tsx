import React, {FunctionComponent, useState} from "react";
import {ModularFormRegisterImpl} from "./ModularFormRegisterImpl";
import {ModularFormCheckoutImpl} from "./ModularFormCheckoutImpl";
import {ModularFormLoginImpl} from "./ModularFormLoginImpl";
import {ModularButton} from "./ModularButton";
import {ModularFormCityDetails} from "./ModularFormCityDetails";

interface Props {
    element: any;
    shouldBeActivated?: boolean;
    user: any;
    setUser: any;
    withActivationButton: boolean;
    no: number;
    images: any;
    isTwoWay: boolean;
}

export const ModularFormForBooking: FunctionComponent<Props> = ({
                                                                    images,
                                                                    setUser,
                                                                    shouldBeActivated,
                                                                    element,
                                                                    user,
                                                                    withActivationButton,
                                                                    no,
                                                                    isTwoWay

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
                        <ModularFormCheckoutImpl isTwoWay={isTwoWay} state={state} no={no} user={user} displayForm={display}
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
                        <ModularFormCityDetails no={no}
                                                companyClass={element && element.company && element.company.class}
                                                companyName={element && element.company && element.company.name}
                                                arrives={element && element.arrives}
                                                leaves={element && element.leaves}
                                                distance={element && element.distance}
                                                duration={element && element.duration}
                                                images={images}
                                                key={"result-item-flights-details-" + element.price + element.departure + element.arrival}
                                                imgSrc={element && element.arrival && element.arrival.image}
                                                price={element.price}
                                                description={element && element.arrival && element.arrival.info}
                                                altText={element.altText} arrival={element.arrival}
                                                departure={element.departure}
                                                element={element}
                                                user={user}
                                                setUser={setUser}
                                                withActivationButton={true}
                                                shouldBeActivated={false}/>

                    </>

                    : null
            }
        </>
    );
}

export default ModularFormForBooking;
