import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ModularButton} from "../input/modular-form/ModularButton";
import axios from "axios";


interface Props {
    element: any;
    user: any;
}

let ResultWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 80%;
    text-align: left;
    display: block;
    color: white;
    padding: 5px;
    border: 1px gray solid;
    background-color: black;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
        padding: 5px;
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

let ResultH3 = styled.h3`
    color: white;
    position: relative;
    margin: 0;
    float: left;
    text-decoration: underline;
`

let ResultDescription = styled.p`
    color: white;
    position: relative;
    float: left;
    margin: 0.2em 0;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    text-align: left;
`

let MainWrapperContent = styled.ul`
    display: flex;
    flex-direction: column;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperContentCol = styled.li`
    display: flex;
    flex-direction: column;
`


export const ResultItemTickets: FunctionComponent<Props> = ({
                                                                element,
                                                                user
                                                            }) => {
    return (
        <ResultWrapper>
            <MainWrapperContent>
                <WrapperContentCol>
                    <ResultH3>{(element && element.departure && element.departure.name) + " -> " + (element && element.arrival && element.arrival.name)}{" - " + (element && element.price) + " €"}</ResultH3>
                    <ResultDescription>{"Departure time: " + element && element.leaves + ". Estimated arrival time: " + element && element.arrives}</ResultDescription>
                </WrapperContentCol>
                <ModularButton type={"submit"} name={"detail"} value={"detail"}
                                   text={"Detail"} id="showDetail"
                                   setOnClickValueMethod={() => { window.location.href = "/mytickets/" + element.ticket_id
                                   ;
                }}/>
                <ModularButton type={"submit"} name={"cancel"} value={"cancel"}
                                   text={"Cancel"} id="cancelTicket"
                                   setOnClickValueMethod={() => { 
                                        axios.delete('/ticket/' + element.ticket_id).then((response) => {
                                            window.location.href = "/myflights";
                                        });
                                   ;
                }}/>
            </MainWrapperContent>
        </ResultWrapper>
    );
}

export default ResultItemTickets;
