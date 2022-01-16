import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {FlightTripItem} from "./FlightTripItem";
import ModularFormForBookingRoundTrip from "../input/modular-form/ModularFormForBookingRoundTrip";

interface Props {
    price: number;
    distance: number;
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

    @media (min-width: 772px) {
        width: 50%;
    };

    @media (min-width: 1060px) {
        width: 75%;
    };

    @media (min-width: 1280px) {
    };
`;

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 0;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

export const ResultItemFlightTrip: FunctionComponent<Props> = ({
                                                                   flights,
                                                                   price,
                                                                   distance,
                                                                   no,
                                                                   user,
                                                                   setUser
                                                               }) => {
    return (
        <ResultWrapper>
            <RowWrapper>
                    {flights && flights.map((place: any) => (
                        <FlightTripItem time={place.duration} arrives={place.arrives} leaves={place.leaves}
                                        distance={place.distance}
                                        price={place.price} arrival={place.arrival} departure={place.departure}
                                        company={place.company}>
                        </FlightTripItem>
                    ))}
                    <ModularFormForBookingRoundTrip flights={flights}
                                                    price={price}
                                                    distance={distance}
                                                    no={no}
                                                    withActivationButton={true}
                                                    user={user}
                                                    setUser={setUser}
                    />
            </RowWrapper>
        </ResultWrapper>
    );
}
