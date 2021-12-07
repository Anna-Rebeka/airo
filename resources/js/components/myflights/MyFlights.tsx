import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import styled from "@emotion/styled";
import ResultItemTickets from "../result/ResultItemTickets";

interface Props {
    dataset: any;
}

let ListOfTickets = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

let Heading1 = styled.h2`
    color: white;
`

let Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MyFlights: FunctionComponent<Props> = ({
                                                        dataset,
                                                        children
                                                    }) => {
    let flightsFrom = JSON.parse(dataset.flights);
    let user = JSON.parse(dataset.user);
    return (
        <div id={"gallery"}>
            <NavigationImpl setUser={null} user={dataset && JSON.parse(dataset.user)}/>
            <Wrapper>
                <Heading1>Welcome {user.first_name} {user.last_name}</Heading1>
                <Heading1>
                    Your tickets
                </Heading1>
                {flightsFrom.map((element: any, index: number) => (
                    <ResultItemTickets user={dataset && JSON.parse(dataset.user)} key={"src" + index}
                                       element={element && element.flight}
                    />))
                }
            </Wrapper>
            <FooterImpl/>
        </div>
    )
}
