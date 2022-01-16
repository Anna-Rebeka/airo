import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {RoundTripAttribute} from "./RoundTripAttribute";
import {ARRIVES, COMPANY, DESTINATION, DISTANCE, FROM, LEAVES, TIME} from "../images";
import {RoundTripAttributeCityName} from "./RoundTripAttributeCityName";
import {useRoundNumber} from "../../BasicUtils";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
}

export let WrapperContentColDescription = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5em;
`

export const RoundTripItemMyFlights: FunctionComponent<Props> = ({
                                                             departure,
                                                             arrival,
                                                             leaves,
                                                             arrives
                                                         }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <RoundTripAttributeCityName icon={FROM} label={departure.name}/>
                <RoundTripAttributeCityName icon={DESTINATION} label={arrival.name}/>
                <RoundTripAttribute icon={LEAVES} label={leaves}/>
                <RoundTripAttribute icon={ARRIVES} label={arrives}/>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
