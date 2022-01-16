import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {RoundTripItem, WrapperContentColDescription} from "./RoundTripItem";
import ModularFormForBookingRoundTrip from "../input/modular-form/ModularFormForBookingRoundTrip";
import {useRoundNumber} from "../../BasicUtils";
import {RoundTripAttribute} from "./RoundTripAttribute";
import {DISTANCE, MONEY, PERSONS} from "../images";
import {Heading3} from "../heading/Heading3";

interface Props {
    totalPrice: number;
    totalDistance: number;
    flights: any;
    no: number;
    user: any;
    setUser: any;
    className?: any;
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

export const ColWrapper = styled(RowWrapper)`
    flex-direction: column;
`

let WrapperButton = styled(WrapperContentColDescription)`
    align-self: flex-start;
`

export const HeadTitle = styled(Heading3)`
    margin: 0;

`

export const ResultItemRoundTrip: FunctionComponent<Props> = ({
                                                                  flights,
                                                                  totalPrice,
                                                                  totalDistance,
                                                                  no,
                                                                  user,
                                                                  setUser,
                                                                  className
                                                              }) => {
    return (
        <ResultWrapper>
            <RowWrapper className={className}>
                {flights && flights.map((place: any, index: number) => (
                    <RoundTripItem key={"flight-trip-item-" + index} time={useRoundNumber(place.duration)}
                                   arrives={place.arrives}
                                   leaves={place.leaves}
                                   distance={useRoundNumber(place.distance)}
                                   arrival={place.arrival}
                                   departure={place.departure}
                                   company={place.company}>
                    </RoundTripItem>
                ))}
                <ColWrapper>
                    <HeadTitle>Total</HeadTitle>
                    <RoundTripAttribute icon={DISTANCE} label={useRoundNumber(totalDistance) + " km"}/>
                    <RoundTripAttribute icon={PERSONS} label={no}/>
                    <RoundTripAttribute icon={MONEY}
                                        label={useRoundNumber(totalPrice * no) + " € (" + useRoundNumber(totalPrice) + "€/person)"}/>
                </ColWrapper>
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
