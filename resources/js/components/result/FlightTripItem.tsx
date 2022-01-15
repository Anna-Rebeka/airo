import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading3} from "../heading/Heading3";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
    companyName: string;
    companyClass: number;
    price: number;
    distance: number;
}

let HashTagIcon = styled.img`
    width: 180px;
    height: auto;
    float: left;
    margin-right: 15px;

    @media (min-width: 772px) {
        width: 200px;
    };

    @media (min-width: 1060px) {
        width: 220px;
    };

    @media (min-width: 1280px) {
        width: 240px;
    };
`

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

    @media (min-width: 476px) {
        width: 70%;
    };
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
                                                                   companyName,
                                                                   companyClass,
                                                                   price,
                                                                   distance
                                                               }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <Element>
                    <ElementTitle>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (price) + " €"}</ElementTitle>
                </Element>
                <Element>{"Departure time: " + leaves}</Element>
                <Element>{"Estimated arrival time: " + arrives}</Element>
                <Element>{"Flight company: " + companyName + "*".repeat(companyClass)}</Element>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
