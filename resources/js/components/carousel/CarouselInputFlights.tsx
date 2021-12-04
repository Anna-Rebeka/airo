import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";
import {InputLink} from "../input/InputLink";
import axios from "axios";


interface Props {

}

let Form = styled.form`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    top: 45%;
    left: 5%;
    z-index: 12;

    @media (min-width: 476px) {
        max-width: 400px;
    };

    @media (min-width: 800px) {
        flex-direction: column;
        min-width: 600px;
    };

    @media (min-width: 1060px) {
        min-width: 800px;
    };

    @media (min-width: 1280px) {
        min-width: 900px;
    };

    @media (min-width: 1600px) {
        min-width: 1200px;
    };

`

let RowFlexBox = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 600px;

    @media (min-width: 800px) {
        flex-direction: row;
    };

`

let RowFlexBoxWays = styled.ul`
    display: flex;
    flex-direction: row;
`


let WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

let WrapperParagraph = styled.p`
    color: white;
    text-shadow: 0 5px 8px black;
    font-size: 1.5em;
    margin: 0 0 0.8em;
`;

let FlexBoxCol = styled.li`
    width: 90%;

    @media (min-width: 800px) {
        width: 50%;
    };
`

let FlexBoxColButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

let IntegerInput = styled.input`
    width: 100%;
    height: 40px;
    box-shadow: 2px 3px 8px 1px black;
`

let DateInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 1.12em;
    border: white solid 1px;
`

export const CarouselInputFlights: FunctionComponent<Props> = ({}) => {
    let [numberOfDays, setNumberOfDays] = useState<number>(1);
    let [isOneWay, setIsOneWay] = useState<boolean>(false);
    let [activated, setActivated] = useState("ONE");
    let [date, setDate] = useState();
    let [from, setFrom] = useState();
    let [to, setTo] = useState();

    let WhichActivated = (type: string) => {
        if (activated === type) {
            return;
        }
        setActivated(type === "ONE" ? "ONE" : "TWO");
    }

    let getListOfFlights = () => {
        console.log('flights/' + from + '/' + to + '/' + date + '/' + numberOfDays
        );
        axios.get('flights/' + from + '/' + to + '/' + date + '/' + numberOfDays
        )
            .then(res => {
                console.log(res);
            })
    }

    return (
        <Form onSubmit={e => e.preventDefault()}>
            <RowFlexBoxWays>
                <InputLink onClick={WhichActivated} type={"ONE"} activated={activated} textField={"One way"}/>
                <InputLink onClick={WhichActivated} type={"TWO"} activated={activated} textField={"Two Way"}/>
            </RowFlexBoxWays>
            <RowFlexBox>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>From</WrapperParagraph>
                        <AutoCompleteInput setMethod={setFrom} placeholder={"Departure city"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>To</WrapperParagraph>
                        <AutoCompleteInput setMethod={setTo} placeholder={"Arrival city"}/>
                    </WrapperInput>
                </FlexBoxCol>
            </RowFlexBox>

            <RowFlexBox>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>Date From</WrapperParagraph>
                        <DateInput type={"date"} onChange={(e: any) => {
                            console.log(e.target.value);
                            setDate(e.target.value);
                        }}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    {
                        activated === "TWO" ?
                            <WrapperInput>
                                <WrapperParagraph>Date To</WrapperParagraph>
                                <DateInput type={"date"} onChange={(e: any) => {
                                    setNumberOfDays(e.target.value);
                                }}/>
                            </WrapperInput>
                            : null
                    }
                </FlexBoxCol>
            </RowFlexBox>
            <RowFlexBox>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>No. of persons</WrapperParagraph>
                        <IntegerInput value={numberOfDays} onChange={(e: any) => {
                            setNumberOfDays(e.target.value);
                        }} min={1} max={14}
                                      type={"number"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxColButton>
                    <WrapperInput>
                        <CarouselButton onClick={getListOfFlights} text={"Book a ticket"}/>
                    </WrapperInput>
                </FlexBoxColButton>
            </RowFlexBox>
        </Form>
    )
}
