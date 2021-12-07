import React, {FunctionComponent} from "react";
import {NavigationImpl} from "../navigation/NavigationImpl";
import {FooterImpl} from "../footer/FooterImpl";
import ResultItem from "../result/ResultItem";
import styled from "@emotion/styled";
import axios from "axios";

interface Props {
    dataset: any;
}

let ListOfTickets = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

let Heading1 = styled.h1`
    color: white;
`

export const MyFlights: FunctionComponent<Props> = ({
                                                        dataset,
                                                        children
                                                    }) => {
    console.log(dataset);
    return (
        <div id={"gallery"}>
            <NavigationImpl setUser={null} user={null}/>
            <ListOfTickets id={"tickets"}>
                <>
                    <Heading1>
                        Found tickets
                    </Heading1>
                </>
            </ListOfTickets>
            <FooterImpl/>
        </div>
    )
}
