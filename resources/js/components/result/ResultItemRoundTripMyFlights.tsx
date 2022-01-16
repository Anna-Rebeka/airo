import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ModularButton} from "../input/modular-form/ModularButton";
import axios from "axios";
import {RoundTripItemMyFlights} from "./RoundTripItemMyFlights";

interface Props {
    totalPrice: number;
    totalDistance: number;
    tickets: any;
    no: number;
}

let ResultWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 80%;
    text-align: left;
    display: block;
    color: white;
    padding: 5px;
    border: 1px gray solid;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
    }
`;

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1em;
    padding: 0;

    :last-child {
        margin-right: auto;
    }
`

export const ResultItemRoundTripMyFlights: FunctionComponent<Props> = ({
                                                                            tickets,
                                                                            totalPrice,
                                                                            totalDistance,
                                                                            no
                                                                        }) => {
    console.log("tickets", tickets);
    return (
        <ResultWrapper>
            <RowWrapper>
                {tickets && tickets.map((ticket: any, index: number) => (
                    <RoundTripItemMyFlights key={"flight-trip-item-" + index}
                                            arrives={ticket.flight.arrives}
                                            leaves={ticket.flight.leaves}
                                            arrival={ticket.flight.arrival}
                                            departure={ticket.flight.departure}
                    />
                ))}
            </RowWrapper>
            <ModularButton type={"submit"} name={"cancel"} value={"cancel"}
                           text={"Cancel"} id="cancelTicket"
                           setOnClickValueMethod={() => {
                               let array: any = [];

                               tickets.map((place: any) => {
                                       array.push(place.id);
                                   }
                               );
                               axios.delete('/roundticket/' + {ids: [array], no: no}).then((response) => {
                                   window.location.href = "/myflights";
                               });

                           }}/>
        </ResultWrapper>
    );
}
