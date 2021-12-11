import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import ResultItemTickets from "../result/ResultItemTickets";
import BasicImpl from "./BasicImpl";

interface Props {
    dataset: any;
    flights: any;
}

let Heading1 = styled.h1`
    color: white;
`

let Heading2 = styled.h2`
    color: white;
`

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
                                                            dataset,
                                                            flights
                                                        }) => {
    const [user, setUser] = useState<any>();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    console.log(flights && Object.keys(flights).length)
    return (
        <BasicImpl user={user} setUser={setUser} id={"myflights"}>
            <Wrapper>
                <Heading1>Your tickets</Heading1>
                <Heading2>Welcome {user && user.first_name} {user && user.last_name}</Heading2>

                {flights && Object.keys(flights).length>0?
                    flights.map((element: any, index: number) => (
                            <ResultItemTickets user={dataset && JSON.parse(dataset.user)} key={"src" + index}
                                               element={element && element.flight}
                            />)):
                    <Paragraph>
                        You don't have any flights.
                    </Paragraph>

                }
            </Wrapper>
        </BasicImpl>
    )
}
