import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";
import {InputLink} from "../input/InputLink";
import axios from "axios";


interface Props {

}

let Form = styled.form`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    width: 100vw;
    height: 100vh;

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
    width: 600px;
    margin: 0;
    padding: 0;

    @media (min-width: 476px) {
        margin-top: 1em;
        margin-bottom: 1em;
    };

    @media (min-width: 800px) {
        flex-direction: row;
    };
`

let RowFlexBoxDate = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin:0;
    padding:0;

    @media (min-width: 1060px) {
        margin-top: 1em;
        margin-bottom: 1em;
        width: 600px;
        flex-direction: row;
    };

`

let RowFlexBoxWays = styled.ul`
    display: flex;
    flex-direction: row;
    margin:0;

    @media (min-width: 476px) {

    };
`

let WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

let WrapperParagraph = styled.p`
    color: white;
    text-shadow: 0 5px 8px black;
    font-size: 1.4em;
    margin: 0 0 0.4em;

    @media (min-width: 476px) {
        margin: 0 0 0.8em;
    };
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

let IntegerInput = styled.input<{ isError: boolean }>`
    width: 100%;
    height: 40px;
    box-shadow: 2px 3px 8px 1px black;

    :not(:focus) {
        border: ${p => p.isError ? "red" : "white"} solid 1px;
    }
`

let DateInput = styled.input<{ isError: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 1.12em;
    border: white solid 1px;

    margin: 0;

    @media (min-width: 476px) {
        margin-top: 1em;
        margin-bottom: 1em;
    };

    :not(:focus) {
        border: ${p => p.isError ? "red" : "white"} solid 1px;
    }
`

let Title = styled.p`
    color: white;
    text-align: center;
    margin: 0;
`
export const CarouselInputFlights: FunctionComponent<Props> = ({}) => {
    const [numberOfPersons, setNumberOfPersons] = useState<number>(1);
    const [isOneWay, setIsOneWay] = useState<boolean>(true);
    const [activated, setActivated] = useState("ONE");
    const [dateFrom, setDateFrom] = useState<any>();
    const [dateTo, setDateTo] = useState<any>();
    const [price, setPrice] = useState<number>(100);
    const [from, setFrom] = useState<string>();
    const [to, setTo] = useState<string>();
    const [inputsFilledWrongly, setInputsFilledWrongly] = useState({
        from: false,
        to: false,
        dateFrom: false,
        dateTo: false,
        maximumPrice: false,
        numberOfPersons: false
    });

    let WhichActivated = (type: string) => {
        if (activated === type) {
            return;
        }
        setActivated(type === "ONE" ? "ONE" : "TWO");
        setIsOneWay(type === "ONE");
    }


    let checkInputs = () => {
        let inputsValues = {
            from: !from || from === "",
            to: !to || to === "",
            dateFrom: !dateFrom || dateFrom === "",
            dateTo: (!dateTo || dateTo === ""),
            numberOfPersons: !numberOfPersons || numberOfPersons <= 0 || numberOfPersons > 14,
            maximumPrice: !price || price <= 0 || price > 9999
        }

        setInputsFilledWrongly({...inputsValues});
        return inputsValues;
    }


    let getListOfFlights = () => {
        let inputsValues = checkInputs();

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

    useEffect(() => {
        if (isOneWay) {
            setDateTo("");
        }
    }, [isOneWay])

    return (
        <Form onSubmit={e => e.preventDefault()}>
            <RowFlexBox>
                <Title>Flight tickets</Title>
            </RowFlexBox>
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

            <RowFlexBoxDate>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>Date From</WrapperParagraph>
                        <DateInput isError={inputsFilledWrongly.dateFrom} type={"date"} onChange={(e: any) => {
                            setDateFrom(e.target.value);
                            setInputsFilledWrongly({...inputsFilledWrongly, dateFrom: false})
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
                                    setInputsFilledWrongly({...inputsFilledWrongly, dateTo: false})
                                }}/>
                            </WrapperInput>
                            : null
                    }
                </FlexBoxCol>
            </RowFlexBoxDate>
            <RowFlexBoxDate>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>No. of persons</WrapperParagraph>
                        <IntegerInput isError={inputsFilledWrongly.numberOfPersons} placeholder={"Select no. of persons (between 1 and 20)"} value={numberOfPersons} onChange={(e: any) => {
                            setNumberOfPersons(e.target.value);
                        }} min={1} max={20}
                                      type={"number"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    <WrapperInput>
                        <WrapperParagraph>Maximum price</WrapperParagraph>
                        <IntegerInput isError={inputsFilledWrongly.maximumPrice} placeholder={"Select maximum price (from 100 to 9999)"} value={price} onChange={(e: any) => {
                            setPrice(e.target.value);
                        }} min={100} max={9999}
                                      type={"number"}/>
                    </WrapperInput>
                </FlexBoxCol>
            </RowFlexBoxDate>
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
