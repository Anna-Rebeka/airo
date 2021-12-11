import React, {FunctionComponent, useState} from "react";
import {ModularFormRoot} from "./ModularFormRoot";
import axios from "axios";
import styled from "@emotion/styled";
import {ModularButton} from "./ModularButton";

interface Props {
    user: any;
    element: any;
    setState: any;
    setDisplay: any;
    displayForm: boolean;
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


export const ModularFormCheckoutImpl: FunctionComponent<Props> = ({element, setDisplay}) => {

    let [successfulBooking, setSuccessfulBooking] = useState(false);

    return (
        <ModularFormRoot setDisplay={setDisplay} title={successfulBooking ? "Ticket bought" : "Check your purchase"}>
            {!successfulBooking ?
                <>
                    <Text>You are about to buy your selected ticket. Please check details below about the ticket.</Text>
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
                        <ModularButton text={"Cancel"} type="submit" id="cancel input" name="cancel checkout button"
                                       value="cancel checkout" setOnClickValueMethod={() => {
                            setDisplay(false);
                        }}/>
                        <ModularButton text={"Book"} type="submit" id="book" name="book checkout button"
                                       value="book checkout" setOnClickValueMethod={() => {
                            axios.post('/ticket', {
                                flight_id: element.id
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
