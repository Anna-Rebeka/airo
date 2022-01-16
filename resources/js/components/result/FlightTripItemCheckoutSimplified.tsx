import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ARRIVES, DESTINATION, DISTANCE, FROM, LEAVES, MONEY} from "../images";
import {FlightTripAttributeCityNameSimplified} from "./FlightTripAttributeCityNameSimplified";
import {FlightTripAttributeSimplified} from "./FlightTripAttributeSimplified";
import {FlightTripAttribute} from "./FlightTripAttribute";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
    price: any;
    distance: any;
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

let Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`

export const FlightTripItemCheckoutSimplified: FunctionComponent<Props> = ({
                                                                               departure,
                                                                               arrival,
                                                                               leaves,
                                                                               arrives,
                                                                               price,
                                                                               distance
                                                                           }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <Row>
                    <FlightTripAttributeCityNameSimplified icon={FROM} label={departure.name}/>
                    <FlightTripAttributeCityNameSimplified icon={DESTINATION} label={arrival.name}/>
                </Row>
                <Row>
                    <FlightTripAttributeSimplified icon={LEAVES} label={leaves}/>
                    <FlightTripAttributeSimplified icon={ARRIVES} label={arrives}/>
                </Row>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
