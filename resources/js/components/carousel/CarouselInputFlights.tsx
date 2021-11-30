import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";


interface Props {

}

let InputGroup = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    top: 45%;
    left: 5%;
    z-index: 12;

    a:last-of-type {
        align-self: flex-end;
    }
`

let WrapperInput = styled.div`
    display: flex;
    margin-right: 3em;
    flex-direction: column;
`;


let WrapperParagraph = styled.p`
    color: white;
    text-shadow: 0 5px 8px black;
    font-size: 1.5em;
`;

let DateInput = styled.input`
    width: 140px;
    height: 40px;
    box-shadow: 2px 3px 8px 1px black;
`;

let IntegerInput = styled.input`
    width: 140px;
    height: 40px;
    box-shadow: 2px 3px 8px 1px black;
`

export const CarouselInputFlights: FunctionComponent<Props> = ({}) => {
    let [numberOfDays, setNumberOfDays] = useState<number>(1);
    return (
        <InputGroup>
            <WrapperInput>
                <WrapperParagraph>From</WrapperParagraph>
                <AutoCompleteInput placeholder={"Type a departure city"}/>
            </WrapperInput>
            <WrapperInput>
                <WrapperParagraph>To</WrapperParagraph>
                <AutoCompleteInput placeholder={"Type an arrival city"}/>
            </WrapperInput>
            <WrapperInput>
                <WrapperParagraph>Date of departure</WrapperParagraph>
                <DateInput type={"date"}/>
            </WrapperInput>
            <WrapperInput>
                <WrapperParagraph>No. of days</WrapperParagraph>
                <IntegerInput value={numberOfDays} onChange={(e: any) => {
                    setNumberOfDays(e.target.value);
                }} min={1} max={14}
                              type={"number"}/>
            </WrapperInput>
            <CarouselButton href={"/search"} text={"Book a ticket"}/>
        </InputGroup>
    )
}
