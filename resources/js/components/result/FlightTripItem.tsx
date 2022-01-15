import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading3} from "../heading/Heading3";
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

let ElementTitle = styled(Heading3)`
    text-decoration: underline;
    margin: 0.2em 0;
`

let Element = styled.li`
    color: white;
    margin: 0;
    list-style: none;
`

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
                <Element>
                    <FlightTripAttributeCityName icon={FROM} label={departure.name}/>
                </Element>
                <Element>
                    <FlightTripAttributeCityName icon={DESTINATION} label={arrival.name}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={LEAVES} label={leaves}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={ARRIVES} label={arrives}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={TIME} label={time + " mins"}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={DISTANCE} label={distance + " km"}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={COMPANY} label={company.name + " " + "*".repeat(company.class)}/>
                </Element>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
