import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading3} from "../heading/Heading3";
import {FlightTripItem} from "./FlightTripItem";

interface Props {
    price: number;
    distance: number;
    places: any;
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

let ResultImg = styled.img`
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

let WrapperContentCol = styled.li`
    display: flex;
    flex-direction: column;
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

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 0;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5em;
`


export const ResultItemFlightTrip: FunctionComponent<Props> = ({
                                                                   places,
                                                                   price,
                                                                   distance
                                                               }) => {
    return (
        <ResultWrapper>
            <RowWrapper>
                <WrapperContentCol>
                </WrapperContentCol>
                {places && places.map((place: any) => (
                    <FlightTripItem >
                    </FlightTripItem>
                ))}
                <WrapperContentCol>
                    {/*<ModularFormForBooking selectedFirstWay={selectedFirstWay} showSecondWay={showSecondWay}
                                            setShowSecondWay={setShowSecondWay}
                                            setSelectedFirstWay={setSelectedFirstWay} flightsTo={flightsTo}
                                            images={images} no={no} withActivationButton={true}
                                            user={user}
                                            setUser={setUser}
                                            element={element}/>
                    */}</WrapperContentCol>
            </RowWrapper>
        </ResultWrapper>
    );
}
