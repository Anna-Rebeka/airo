import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {RoundTripItem, WrapperContentColDescription} from "./RoundTripItem";
import {useRoundNumber} from "../../BasicUtils";
import {ModularButton} from "../input/modular-form/ModularButton";
import axios from "axios";

interface Props {
    totalPrice: number;
    totalDistance: number;
    tickets: any;
    no: number;
}

let ResultWrapper = styled.article`
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

let WrapperButton = styled(WrapperContentColDescription)`
    align-self: flex-start;
`

export const ResultItemFlightTripMyFlights: FunctionComponent<Props> = ({
                                                                            tickets,
                                                                            totalPrice,
                                                                            totalDistance,
                                                                            no
                                                                        }) => {
    console.log(tickets);
    return (
        <ResultWrapper>
            <RowWrapper>
                {tickets && tickets.map((ticket: any, index: number) => (
                    <RoundTripItem key={"flight-trip-item-" + index} time={useRoundNumber(ticket.duration)}
                                   arrives={ticket.flight.arrives}
                                   leaves={ticket.flight.leaves}
                                   distance={useRoundNumber(ticket.flight.distance)}
                                   arrival={ticket.flight.arrival}
                                   departure={ticket.flight.departure}
                                   company={ticket.flight.company}>
                    </RoundTripItem>
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
