import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import ResultItemTickets from "../result/ResultItemTickets";
import BasicImpl from "./BasicImpl";
import {Heading1} from "../heading/Heading1";
import {Heading2} from "../heading/Heading2";
import {ResultItemFlightTripMyFlights} from "../result/ResultItemFlightTripMyFlights";

interface Props {
    dataset: any;
}

let Paragraph = styled.p`
    color: white;
`

let Wrapper = styled.div`
    width: 100%;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MyFlightsImpl: FunctionComponent<Props> = ({
                                                            dataset
                                                        }) => {
    const [user, setUser] = useState<any>();
    const [flights, setFlights] = useState<any>();
    const [roundTrips, setRoundTrips] = useState<any>();

    useEffect(() => {
        console.log(dataset);
        setUser(JSON.parse(dataset.user));
        setFlights(JSON.parse(dataset.flights));
        setRoundTrips(JSON.parse(dataset.roundtrips));
    }, [dataset])

    return (
        <BasicImpl user={user} setUser={setUser} id={"myflights"}>
            <Wrapper>
                <Heading1>Your tickets</Heading1>
                <Heading2>Welcome {user && user.first_name} {user && user.last_name}</Heading2>


                {(!flights || Object.keys(flights).length === 0) && (!roundTrips || Object.keys(roundTrips).length === 0) ?
                    <Paragraph>
                        You don't have any flights or round trip tickets.
                    </Paragraph> :
                    null
                }

                {flights && Object.keys(flights).length > 0 ?
                    flights.map((flightTicket: any, index: number) => (
                        <ResultItemTickets key={"result-item-flight-ticket-" + index}
                                           element={flightTicket && flightTicket.flight}
                        />)) :
                    null
                }

                {roundTrips && Object.keys(roundTrips).length > 0 ?
                    roundTrips.map((roundTripTicket: any, index: number) => (
                        <ResultItemFlightTripMyFlights key={"result-item-round-trip-ticket-" + index}
                                                       flights={roundTripTicket.flights}
                                                       no={roundTripTicket.no}
                                                       totalPrice={roundTripTicket.totalPrice}
                                                       totalDistance={roundTripTicket.totalDistance}
                        />)) :
                    null
                }
            </Wrapper>
        </BasicImpl>
    )
}
