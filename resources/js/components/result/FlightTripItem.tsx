import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading3} from "../heading/Heading3";
import {FlightTripAttribute} from "./FlightTripAttribute";
import {ARRIVES, LEAVES} from "../images";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
    company: any;
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

let Attribute = styled.div`
    display: flex;
    flex-direction: row;
`

let AttributeIcon = styled.img`
    margin: 0.3em;
    width: 24px;
    height: 24px;
    background-color: transparent;
`

let AttributeValue = styled.span`
    color: white;
    font-size: 0.7em;
`


export const FlightTripItem: FunctionComponent<Props> = ({
                                                             departure,
                                                             arrival,
                                                             leaves,
                                                             arrives,
                                                             company,
                                                             price,
                                                             distance
                                                         }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <Element>
                    <ElementTitle>{(departure && departure.name)}</ElementTitle>
                </Element>
                <Element>
                    <FlightTripAttribute icon={LEAVES} label={leaves}/>
                </Element>
                <Element>
                    <FlightTripAttribute icon={ARRIVES} label={arrives}/>
                </Element>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
