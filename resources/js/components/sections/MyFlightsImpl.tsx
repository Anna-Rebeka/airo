import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import ResultItemTickets from "../result/ResultItemTickets";
import BasicImpl from "./BasicImpl";

interface Props {
    dataset: any;
    flights: any;
}

let Heading1 = styled.h2`
    color: white;
`

let Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MyFlightsImpl: FunctionComponent<Props> = ({
                                                            dataset,
                                                            flights
                                                        }) => {
    const [user, setUser] = useState<any>();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    return (
        <BasicImpl user={user} setUser={setUser} id={"myflights"}>
            <Wrapper>
                <Heading1>Welcome {user && user.first_name} {user && user.last_name}</Heading1>
                <Heading1>
                    Your tickets
                </Heading1>
                {flights.map((element: any, index: number) => (
                    <ResultItemTickets user={dataset && JSON.parse(dataset.user)} key={"src" + index}
                                       element={element && element.flight}
                    />))
                }
            </Wrapper>
        </BasicImpl>
    )
}
