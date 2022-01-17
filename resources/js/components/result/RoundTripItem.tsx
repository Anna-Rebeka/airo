import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {RoundTripAttribute} from "./RoundTripAttribute";
import {ARRIVES, COMPANY, DESTINATION, DISTANCE, FROM, LEAVES, TIME} from "../images";
import {RoundTripAttributeCityName} from "./RoundTripAttributeCityName";
import {useRoundNumber} from "../../BasicUtils";
import {RoundTripAttributePreferences} from "./RoundTripAttributePreferences";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
    company: any;
    distance: number;
    time: any;
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

export const WrapperNamePreferences = styled.div`
    display: flex;
    flex-direction: column;
`

export const RoundTripItem: FunctionComponent<Props> = ({
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
                <WrapperNamePreferences>
                    <RoundTripAttributeCityName icon={FROM} label={departure.name}/>
                    <RoundTripAttributePreferences preferences={departure.preferences}/>
                </WrapperNamePreferences>
                <WrapperNamePreferences>
                    <RoundTripAttributeCityName icon={DESTINATION} label={arrival.name}/>
                    <RoundTripAttributePreferences preferences={arrival.preferences}/>
                </WrapperNamePreferences>
                <RoundTripAttribute icon={LEAVES} label={leaves}/>
                <RoundTripAttribute icon={ARRIVES} label={arrives}/>
                <RoundTripAttribute icon={TIME} label={useRoundNumber(time) + " mins"}/>
                <RoundTripAttribute icon={DISTANCE} label={useRoundNumber(distance) + " km"}/>
                <RoundTripAttribute icon={COMPANY} label={company.name + " " + "*".repeat(company.class)}/>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
