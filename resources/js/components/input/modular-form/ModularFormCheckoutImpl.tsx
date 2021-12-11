import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import axios from "axios";
import styled from "@emotion/styled";
import {ModularButton} from "./ModularButton";
import {ModularFormInputElement} from "./ModularFormInputElement";

interface Props {
    user: any;
    element: any;
    state: string;
    setState: any;
    setDisplay: any;
    displayForm: boolean;
    no: number;
}

let Text = styled.p`
    color: white;
    text-align: center;
`

let FlexboxInputsCheckout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

let TextCheckout = styled.p`
    color: white;
    text-align: center;
    margin: 0;
`
let FlexboxInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


export const ModularFormCheckoutImpl: FunctionComponent<Props> = ({element, setDisplay, state, no}) => {

    let [successfulBooking, setSuccessfulBooking] = useState(false);
    let [emailAddress, setEmailAddress] = useState("");


    return (
        <ModularFormRoot setDisplay={setDisplay} title={successfulBooking ? "Ticket bought" : "Check your purchase"}>
            {!successfulBooking ?
                <>
                    <Text>You are about to buy your selected ticket. Please check details below about the ticket.</Text>
                    <FlexboxInputsCheckout>
                        <TextCheckout>Departure and arrival
                            city: {(element && element.departure && element.departure.name) + " -> " + (element && element.arrival && element.arrival.name)} </TextCheckout>
                        <TextCheckout>Date and time of departure: {element && element.leaves}</TextCheckout>
                        <TextCheckout>Date and time of arrival: {element && element.arrives}</TextCheckout>
                        <TextCheckout>Price: {element ? (element.price * no) + " € " + ((no > 1) ? ("(" + (element.price) + "€/each)") : "") : ""}</TextCheckout>
                        <TextCheckout>Number of persons: {no}</TextCheckout>
                        <TextCheckout>Company: {element && element.company && element.company.name + "*".repeat(element && element.company && element.company.class)}</TextCheckout>
                        <TextCheckout>Duration and
                            distance: {element && element.duration + "mins " + element && element.distance + "km"}</TextCheckout>
                    </FlexboxInputsCheckout>
                    <Text>Do you want to book?</Text>
                    {state === "CHECKOUT_NOT_REGISTERED" ?
                        <ModularFormInputElement type="text" id="emailAddressRegisterInput" name="emailAddress"
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
                            axios.post('/ticket', {
                                flight_id: element.id,
                                no: no,
                                email: emailAddress
                            }).then((res) => {
                                setSuccessfulBooking(true);
                            })
                        }}/>
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
