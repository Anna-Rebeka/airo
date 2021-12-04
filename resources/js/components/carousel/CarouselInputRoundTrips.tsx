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
    z-index: 0;

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

let WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
`

let WrapperPreferences = styled.div`

`

export const CarouselInputRoundTrips: FunctionComponent<Props> = ({}) => {
    let [numberOfDestinations, setNumberOfDestinations] = useState<number>(1);
    let [priceTo, setPriceTo] = useState<number>();
    return (
        <WrapperDiv>
            <InputGroup>
                <WrapperInput>
                    <WrapperParagraph>From</WrapperParagraph>
                    <AutoCompleteInput setMethod={null} placeholder={"Type a departure city"}/>
                </WrapperInput>
                <WrapperInput>
                    <WrapperParagraph>Date of departure</WrapperParagraph>
                    <DateInput type={"date"}/>
                </WrapperInput>
                <WrapperInput>
                    <WrapperParagraph>No. of destinations</WrapperParagraph>
                    <IntegerInput type={"number"} value={numberOfDestinations} min={1} max={12} onChange={(e: any) => {
                        setNumberOfDestinations(e.target.value)
                    }}/>
                </WrapperInput>
                <WrapperInput>
                    <WrapperParagraph>Price to</WrapperParagraph>
                    <IntegerInput type={"number"} placeholder={"Type price"} value={priceTo} min={45} max={9999}
                                  onChange={(e: any) => {
                                      setPriceTo(e.target.value)
                                  }}/>
                </WrapperInput>
                <CarouselButton onClick={null} text={"Search a round trip"}/>
            </InputGroup>
        </WrapperDiv>

    )
}
