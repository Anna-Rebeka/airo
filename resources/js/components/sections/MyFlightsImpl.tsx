import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import ResultItemTickets from "../result/ResultItemTickets";
import BasicImpl from "./BasicImpl";
import {Heading1} from "../heading/Heading1";
import {Heading2} from "../heading/Heading2";

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

    useEffect(() => {
        setUser(JSON.parse(dataset.user));
        setFlights(JSON.parse(dataset.flights));
    }, [dataset])

    return (
        <BasicImpl user={user} setUser={setUser} id={"myflights"}>
            <Wrapper>
                <Heading1>Your tickets</Heading1>
                <Heading2>Welcome {user && user.first_name} {user && user.last_name}</Heading2>

                {flights && Object.keys(flights).length > 0 ?
                    flights.map((element: any, index: number) => (
                        <ResultItemTickets user={dataset && JSON.parse(dataset.user)} key={"src" + index}
                                           element={element && element.flight}
                        />)) :
                    <Paragraph>
                        You don't have any flights.
                    </Paragraph>

                }
            </Wrapper>
        </BasicImpl>
    )
}
