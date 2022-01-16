import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import axios from "axios";
import styled from "@emotion/styled";
import {ModularButton} from "./ModularButton";
import {ModularFormInputElement} from "./ModularFormInputElement";
import {ValidateEmail} from "../../../hooks/useValidators";
import {FlightTripItemCheckoutSimplified, RowCenter} from "../../result/FlightTripItemCheckoutSimplified";
import {FlightTripAttribute} from "../../result/FlightTripAttribute";
import {DISTANCE, MONEY} from "../../images";
import {useRoundNumber} from "../../../BasicUtils";

interface Props {
    user: any;
    roundTrip: any;
    state: string;
    setState: any;
    setDisplay: any;
    displayForm: boolean;
    no: number;
}

let Text = styled.p`
    color: white;
    text-align: center;
    margin: 0.2em;
`

let TextTitle = styled.p`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0;
`

let FlexboxInputsCheckout = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    max-width: 95%;
`

let FlexboxInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

let WrapperInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const ModularFormCheckoutImplRoundTrip: FunctionComponent<Props> = ({
                                                                               roundTrip,
                                                                               setDisplay,
                                                                               state,
                                                                               no
                                                                           }) => {

    let [successfulBooking, setSuccessfulBooking] = useState(false);
    let [emailAddress, setEmailAddress] = useState("");
    let [isWrongEmail, setIsWrongEmail] = useState(false);

    return (
        <ModularFormRoot setDisplay={setDisplay}
                         title={successfulBooking ? "Round trip bought" : "Check your purchase"}>
            {!successfulBooking ?
                <>
                    <Text>You are about to buy your selected ticket. Please check details below about the
                        ticket.</Text>
                    <WrapperInput>
                        <FlexboxInputsCheckout>
                            <TextTitle>{"Round trip ticket"}</TextTitle>
                            {roundTrip.flights && roundTrip.flights.map((place: any, index: number) => (
                                <FlightTripItemCheckoutSimplified
                                    key={"flight-trip-item-" + index}
                                    arrives={place.arrives}
                                    leaves={place.leaves}
                                    arrival={place.arrival}
                                    departure={place.departure}
                                />
                            ))}
                            <RowCenter>
                                <FlightTripAttribute icon={MONEY} label={useRoundNumber(roundTrip.totalPrice) + " €"}/>
                                <FlightTripAttribute icon={DISTANCE}
                                                     label={useRoundNumber(roundTrip.totalDistance) + " km"}/>
                            </RowCenter>
                        </FlexboxInputsCheckout>
                    </WrapperInput>
                    <Text>Do you want to book?</Text>
                    {state === "CHECKOUT_NOT_REGISTERED" ?
                        <ModularFormInputElement isWrongFromParent={isWrongEmail}
                                                 setIsWrongParentMethod={setIsWrongEmail}
                                                 validatorMethodIsValid={ValidateEmail}
                                                 errorMessage={"Email address is not in a correct format."} type="text"
                                                 id="emailAddressRegisterInput" name="emailAddress"
                                                 placeholder="Email address"
                                                 value={emailAddress}
                                                 setOnChangeValueMethod={setEmailAddress}/>
                        : null
                    }
                    <FlexboxInputs>
                        <ModularButton text={"Cancel"} type="submit" id="cancel input" name="cancel checkout button"
                                       value="cancel checkout" setOnClickValueMethod={() => {
                            setDisplay(false);
                        }}/>
                        <ModularButton text={"Book"} type="submit" id="book" name="book checkout button"
                                       value="book checkout" setOnClickValueMethod={() => {
                            if (state !== "LOGGED" && (!emailAddress || emailAddress === "")) {
                                setIsWrongEmail(true);
                                return;
                            }
                            if (!isWrongEmail || state === "LOGGED") {
                                axios.post('/ticket', {
                                    flight_id: roundTrip.id,
                                    no: no,
                                    email: emailAddress
                                }).then((res) => {
                                    setSuccessfulBooking(true);
                                })
                            }
                        }
                        }/>
                    </FlexboxInputs>
                </> :
                <>
                    <Text>Your ticket was successfully bought. Thank you for your
                        purchase!</Text>
                    <ModularButton text={"Home"} type="submit" id="backToHomeSuccessfulBook"
                                   name="backToHomeSuccessfulBookName"
                                   value="backToHomeSuccessfulBookValue"
                                   setOnClickValueMethod={() => window.location.href = "/"}/>
                </>
            }
        </ModularFormRoot>
    );
}
