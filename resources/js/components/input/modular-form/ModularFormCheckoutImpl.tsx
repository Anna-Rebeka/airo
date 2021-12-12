import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import axios from "axios";
import styled from "@emotion/styled";
import {ModularButton} from "./ModularButton";
import {ModularFormInputElement} from "./ModularFormInputElement";
import {ValidateEmail} from "../../../hooks/useValidators";

interface Props {
    user: any;
    element: any;
    state: string;
    setState: any;
    setDisplay: any;
    displayForm: boolean;
    no: number;
    flightsTo: any;
    selectedFirstWay: any;
}

let Text = styled.p`
    color: white;
    text-align: center;
`

let TextTitle = styled.p`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0.5em;
`

let FlexboxInputsCheckout = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    max-width: 70%;
`

let TextCheckout = styled.li`
    color: white;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style: none;
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


export const ModularFormCheckoutImpl: FunctionComponent<Props> = ({
                                                                      element,
                                                                      setDisplay,
                                                                      state,
                                                                      no,
                                                                      flightsTo,
                                                                      selectedFirstWay
                                                                  }) => {

    let [successfulBooking, setSuccessfulBooking] = useState(false);
    let [emailAddress, setEmailAddress] = useState("");
    let [isWrongEmail, setIsWrongEmail] = useState(false);

    return (
        <ModularFormRoot setDisplay={setDisplay} title={successfulBooking ? "Ticket bought" : "Check your purchase"}>
            {!successfulBooking ?
                <>
                    <Text>You are about to buy your selected ticket. Please check details below about the ticket.</Text>
                    {selectedFirstWay ?
                        <WrapperInput>
                            <FlexboxInputsCheckout>
                                <TextTitle>Departure ticket</TextTitle>
                                <TextCheckout>Departure and arrival
                                    city: {(selectedFirstWay && selectedFirstWay.departure && selectedFirstWay.departure.name) + " -> " + (selectedFirstWay && selectedFirstWay.arrival && selectedFirstWay.arrival.name)} </TextCheckout>
                                <TextCheckout>Date and time of
                                    departure: {selectedFirstWay && selectedFirstWay.leaves}</TextCheckout>
                                <TextCheckout>Date and time of
                                    arrival: {selectedFirstWay && selectedFirstWay.arrives}</TextCheckout>
                                <TextCheckout>Price: {selectedFirstWay ? (selectedFirstWay.price * no) + " € " + ((no > 1) ? ("(" + (selectedFirstWay.price) + "€/each)") : "") : ""}</TextCheckout>
                                <TextCheckout>Number of persons: {no}</TextCheckout>
                                <TextCheckout>Company: {selectedFirstWay && selectedFirstWay.company && selectedFirstWay.company.name + "*".repeat(selectedFirstWay && selectedFirstWay.company && selectedFirstWay.company.class)}</TextCheckout>
                                <TextCheckout>Duration and
                                    distance: {selectedFirstWay && selectedFirstWay.duration + "mins " + selectedFirstWay && selectedFirstWay.distance + "km"}</TextCheckout>
                            </FlexboxInputsCheckout>
                        </WrapperInput> : null
                    }
                    <WrapperInput>
                        <FlexboxInputsCheckout>
                            <TextTitle>{selectedFirstWay ? "Arrival ticket" : "Departure ticket"}</TextTitle>
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
                                if (selectedFirstWay) {
                                    axios.post('/ticket', {
                                        flight_id: selectedFirstWay.id,
                                        no: no,
                                        email: emailAddress
                                    }).then((res) => {

                                    })
                                }
                                axios.post('/ticket', {
                                    flight_id: element.id,
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
