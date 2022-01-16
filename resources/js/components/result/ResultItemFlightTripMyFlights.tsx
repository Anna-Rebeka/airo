import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {RoundTripItem, WrapperContentColDescription} from "./RoundTripItem";
import {useRoundNumber} from "../../BasicUtils";
import {ModularButton} from "../input/modular-form/ModularButton";
import axios from "axios";

interface Props {
    totalPrice: number;
    totalDistance: number;
    flights: any;
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
                                                                            flights,
                                                                            totalPrice,
                                                                            totalDistance,
                                                                            no
                                                                        }) => {
    return (
        <ResultWrapper>
            <RowWrapper>
                {flights && flights.map((place: any, index: number) => (
                    <RoundTripItem key={"flight-trip-item-" + index} time={useRoundNumber(place.duration)}
                                   arrives={place.arrives}
                                   leaves={place.leaves}
                                   distance={useRoundNumber(place.distance)}
                                   price={useRoundNumber(place.price)} arrival={place.arrival}
                                   departure={place.departure}
                                   company={place.company}>
                    </RoundTripItem>
                ))}
            </RowWrapper>
            <ModularButton type={"submit"} name={"cancel"} value={"cancel"}
                           text={"Cancel"} id="cancelTicket"
                           setOnClickValueMethod={() => {
                               let array: any = [];

                               flights.map((place: any) => {
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
