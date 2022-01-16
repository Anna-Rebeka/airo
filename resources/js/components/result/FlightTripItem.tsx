import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {FlightTripAttribute} from "./FlightTripAttribute";
import {ARRIVES, COMPANY, DESTINATION, DISTANCE, FROM, LEAVES, TIME} from "../images";
import {FlightTripAttributeCityName} from "./FlightTripAttributeCityName";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
    company: any;
    price: number;
    distance: number;
    time: any;
}

let WrapperContentColDescription = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5em;
`

export const FlightTripItem: FunctionComponent<Props> = ({
                                                             departure,
                                                             arrival,
                                                             leaves,
                                                             arrives,
                                                             company,
                                                             time,
                                                             distance
                                                         }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <FlightTripAttributeCityName icon={FROM} label={departure.name}/>
                <FlightTripAttributeCityName icon={DESTINATION} label={arrival.name}/>
                <FlightTripAttribute icon={LEAVES} label={leaves}/>
                <FlightTripAttribute icon={ARRIVES} label={arrives}/>
                <FlightTripAttribute icon={TIME} label={time + " mins"}/>
                <FlightTripAttribute icon={DISTANCE} label={distance + " km"}/>
                <FlightTripAttribute icon={COMPANY} label={company.name + " " + "*".repeat(company.class)}/>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
