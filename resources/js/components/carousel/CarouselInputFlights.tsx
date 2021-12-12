import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";
import {InputLink} from "../input/input-link/InputLink";
import axios from "axios";
import {Heading2} from "../heading/Heading2";
import {Heading3} from "../heading/Heading3";
import {Error} from "../input/auto-complete/Error";


interface Props {
    setFlightsFrom: any;
    setFlightsTo: any;
    setNo: any;
}

let Form = styled.form`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;

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
    justify-content: center;
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
    margin: 0;
    padding: 0;

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
    margin: 0;

    @media (min-width: 476px) {

    };
`

let WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

let InputTitle = styled(Heading3)`
    text-shadow: 0 5px 8px black;
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

const Title = styled(Heading2)`
    text-align: center;
`

export const CarouselInputFlights: FunctionComponent<Props> = ({setFlightsFrom, setFlightsTo, setNo}) => {
    const [numberOfPersons, setNumberOfPersons] = useState<number>(1);
    const [isOneWay, setIsOneWay] = useState<boolean>(true);
    const [activated, setActivated] = useState("ONE");
    const [dateFrom, setDateFrom] = useState<any>();
    const [dateTo, setDateTo] = useState<any>();
    const [price, setPrice] = useState<number>(100);
    const [from, setFrom] = useState<string>();
    const [to, setTo] = useState<string>();
    const [dateToBeforeDateFrom, setDateToBeforeDateFrom] = useState(false);
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
            dateTo: !isOneWay && (!dateTo || dateTo === "") || (dateTo && dateFrom && dateFrom !== "" && dateTo !== "" && new Date(dateFrom) > new Date(dateTo)),
            numberOfPersons: !numberOfPersons || numberOfPersons <= 0 || numberOfPersons > 20,
            maximumPrice: !price || price < 50 || price > 9999
        }
        setInputsFilledWrongly({...inputsValues});
        return inputsValues;
    }


    let getListOfFlights = () => {
        let inputsValues = checkInputs();
        setDateToBeforeDateFrom(dateTo && dateFrom && dateFrom !== "" && dateTo !== "" && new Date(dateFrom) > new Date(dateTo));
        let notSearchFlights = Object.values(inputsValues).some((val) => {
                if (val) {
                    return true;
                }
            }
        )

        if (notSearchFlights) {
            return;
        }

        axios.get('flights/' + from + '/' + to + '/' + dateFrom + '/' + price
        )
            .then(res => {
                console.log(res.data);
                setFlightsFrom([...res.data]);
            })

        if (!isOneWay) {
            axios.get('flights/' + from + '/' + to + '/' + dateFrom + '/' + price
            )
                .then((res) => {
                    setFlightsTo([...res.data])
                })
        }

        console.log();
        let element = document.getElementById('tickets');
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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
                        <InputTitle>From</InputTitle>
                        <AutoCompleteInput isError={inputsFilledWrongly.from} setMethod={setFrom}
                                           placeholder={"Departure city"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    <WrapperInput>
                        <InputTitle>To</InputTitle>
                        <AutoCompleteInput isError={inputsFilledWrongly.to} setMethod={setTo}
                                           placeholder={"Arrival city"}/>
                    </WrapperInput>
                </FlexBoxCol>
            </RowFlexBox>

            <RowFlexBoxDate>
                <FlexBoxCol>
                    <WrapperInput>
                        <InputTitle>Departure date</InputTitle>
                        <DateInput isError={inputsFilledWrongly.dateFrom} type={"date"} onChange={(e: any) => {
                            setDateFrom(e.target.value);
                            setInputsFilledWrongly({...inputsFilledWrongly, dateFrom: false})
                        }}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    {
                        activated === "TWO" ?
                            <>
                                <WrapperInput>
                                    <InputTitle>Return date</InputTitle>
                                    <DateInput isError={inputsFilledWrongly.dateTo} type={"date"}
                                               onChange={(e: any) => {
                                                   setDateTo(e.target.value);
                                                   setInputsFilledWrongly({...inputsFilledWrongly, dateTo: false})
                                               }}/>
                                </WrapperInput>
                                {dateToBeforeDateFrom ?
                                    <Error>
                                        Return date is before departure date
                                    </Error> :
                                    null}
                            </>

                            : null
                    }
                </FlexBoxCol>
            </RowFlexBoxDate>
            <RowFlexBoxDate>
                <FlexBoxCol>
                    <WrapperInput>
                        <InputTitle>No. of persons</InputTitle>
                        <IntegerInput isError={inputsFilledWrongly.numberOfPersons}
                                      placeholder={"between 1 and 20"} value={numberOfPersons}
                                      onChange={(e: any) => {
                                          setNumberOfPersons(e.target.value);
                                          setNo(e.target.value);
                                      }} min={1} max={20}
                                      type={"number"}/>
                    </WrapperInput>
                </FlexBoxCol>
                <FlexBoxCol>
                    <WrapperInput>
                        <InputTitle>Maximum price</InputTitle>
                        <IntegerInput isError={inputsFilledWrongly.maximumPrice}
                                      placeholder={"from 50 to 9999"} value={price}
                                      onChange={(e: any) => {
                                          setPrice(e.target.value);
                                      }} min={50} max={9999}
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
