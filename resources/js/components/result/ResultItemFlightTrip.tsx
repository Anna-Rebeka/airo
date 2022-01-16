import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {FlightTripItem, WrapperContentColDescription} from "./FlightTripItem";
import ModularFormForBookingRoundTrip from "../input/modular-form/ModularFormForBookingRoundTrip";
import {useRoundNumber} from "../../BasicUtils";

interface Props {
    totalPrice: number;
    totalDistance: number;
    flights: any;
    no: number;
    user: any;
    setUser: any;
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

export const ResultItemFlightTrip: FunctionComponent<Props> = ({
                                                                   flights,
                                                                   totalPrice,
                                                                   totalDistance,
                                                                   no,
                                                                   user,
                                                                   setUser
                                                               }) => {
    return (
        <ResultWrapper>
            <RowWrapper>
                {flights && flights.map((place: any, index: number) => (
                    <FlightTripItem key={"flight-trip-item-" + index} time={useRoundNumber(place.duration)}
                                    arrives={place.arrives}
                                    leaves={place.leaves}
                                    distance={useRoundNumber(place.distance)}
                                    price={useRoundNumber(place.price)} arrival={place.arrival}
                                    departure={place.departure}
                                    company={place.company}>
                    </FlightTripItem>
                ))}
                <WrapperButton>
                    <ModularFormForBookingRoundTrip flights={flights}
                                                    totalPrice={totalPrice}
                                                    totalDistance={totalDistance}
                                                    no={no}
                                                    withActivationButton={true}
                                                    user={user}
                                                    setUser={setUser}
                    />
                </WrapperButton>
            </RowWrapper>
        </ResultWrapper>
    );
}
