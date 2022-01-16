import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ARRIVES, DESTINATION, FROM, LEAVES} from "../images";
import {RoundTripAttributeCityNameSimplified} from "./RoundTripAttributeCityNameSimplified";
import {RoundTripAttributeSimplified} from "./RoundTripAttributeSimplified";

interface Props {
    departure: any;
    arrival: any;
    leaves: any;
    arrives: any;
}

export let WrapperContentColDescription = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5em;
`

let Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`

export const RoundTripItemCheckoutSimplified: FunctionComponent<Props> = ({
                                                                               departure,
                                                                               arrival,
                                                                               leaves,
                                                                               arrives
                                                                           }) => {
    return (
        <WrapperContentColDescription>
            <WrapperDetails>
                <Row>
                    <RoundTripAttributeCityNameSimplified icon={FROM} label={departure.name}/>
                    <RoundTripAttributeCityNameSimplified icon={DESTINATION} label={arrival.name}/>
                </Row>
                <Row>
                    <RoundTripAttributeSimplified icon={LEAVES} label={leaves}/>
                    <RoundTripAttributeSimplified icon={ARRIVES} label={arrives}/>
                </Row>
            </WrapperDetails>
        </WrapperContentColDescription>

    );
}
