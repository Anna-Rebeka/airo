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
    top: 35%;
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
    list-style: none;

    @media (min-width: 800px) {
        width: 50%;
    };
`

let FlexBoxColButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

let IntegerInput = styled.input`
    width: 100%;
    height: 40px;
    box-shadow: 2px 3px 8px 1px black;
`

let DateInput = styled.input<{ isError: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 1.12em;
    border: white solid 1px;

    :not(:focus) {
        border: ${p => p.isError ? "red" : "white"} solid 1px;
    }
`

export const CarouselInputFlights: FunctionComponent<Props> = ({}) => {
    let [numberOfDays, setNumberOfDays] = useState<number>(1);
    let [isOneWay, setIsOneWay] = useState<boolean>(true);
    let [activated, setActivated] = useState("ONE");
    let [dateFrom, setDateFrom] = useState();
    let [dateTo, setDateTo] = useState();
    let [price, setPrice] = useState();
    let [from, setFrom] = useState();
    let [to, setTo] = useState();
    let [inputsFilledWrongly, setInputsFilledWrongly] = useState({
        from: false,
        to: false,
        dateFrom: false,
        dateTo: false,
        price: false,
        numberOfDays: false
    });

    let WhichActivated = (type: string) => {
        if (activated === type) {
            return;
        }
        setActivated(type === "ONE" ? "ONE" : "TWO");
        setIsOneWay(type === "ONE");
    }

    let getListOfFlights = () => {
        let inputsValues = {
            from: !from || from === "",
            to: !to || to === "",
            dateFrom: !dateFrom || dateFrom === "",
            dateTo: !isOneWay && (!dateTo || dateTo === ""),
            price: !numberOfDays || numberOfDays < 0 || numberOfDays > 14,
            numberOfDays: !numberOfDays || numberOfDays < 0 || numberOfDays > 14,
            maximumPrice: !price || price < 0 || price > 9999
        }

        console.log(inputsValues);

        setInputsFilledWrongly({...inputsValues});

        let searchFlights = Object.values(inputsValues).some((val) => {
                if (val) {
                    return true;
                }
            }
        )

        if (searchFlights) {
            return;
        }


        let allFlights = [];

        console.log('flights/' + from + '/' + to + '/' + dateFrom + '/' + price
        );
        axios.get('flights/' + from + '/' + to + '/' + dateFrom + '/' + price
        )
            .then(res => {
                console.log(res);
            })

        if (!isOneWay) {
            console.log('flights/' + to + '/' + from + '/' + dateTo + '/' + price
            );
            axios.get('flights/' + from + '/' + to + '/' + dateFrom + '/' + price
            )
                .then(res => {
                    console.log(res);
                })
        }


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
                        <AutoCompleteInput isError={inputsFilledWrongly.from} setMethod={setFrom}
                                           placeholder={"Departure city"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>To</WrapperParagraph>
                        <AutoCompleteInput isError={inputsFilledWrongly.to} setMethod={setTo}
                                           placeholder={"Arrival city"}/>
                    </WrapperInput>
                </FlexBoxCol>
            </RowFlexBox>

            <RowFlexBox>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>Date From</WrapperParagraph>
                        <DateInput isError={inputsFilledWrongly.dateFrom} type={"date"} onChange={(e: any) => {
                            setDateFrom(e.target.value);
                            setInputsFilledWrongly({...inputsFilledWrongly,dateFrom: false})
                        }}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    {
                        activated === "TWO" ?
                            <WrapperInput>
                                <WrapperParagraph>Date To</WrapperParagraph>
                                <DateInput isError={inputsFilledWrongly.dateTo} type={"date"} onChange={(e: any) => {
                                    setDateTo(e.target.value);
                                    setInputsFilledWrongly({...inputsFilledWrongly,dateTo: false})
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
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>Maximum price</WrapperParagraph>
                        <IntegerInput value={price} onChange={(e: any) => {
                            setPrice(e.target.value);
                        }} min={1} max={9999}
                                      type={"number"}/>
                    </WrapperInput>
                </FlexBoxCol>
            </RowFlexBox>
            <RowFlexBox>
                <FlexBoxColButton>
                    <WrapperInput>
                        <CarouselButton onClick={getListOfFlights} text={"Book a ticket"}/>
                    </WrapperInput>
                </FlexBoxColButton>
            </RowFlexBox>
        </Form>
    )
}
