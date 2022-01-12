import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";
import axios from "axios";
import {Heading2} from "../heading/Heading2";
import {Heading3} from "../heading/Heading3";
import {Error} from "../input/auto-complete/Error";
import PreferencesCheckBox from "../checkbox/PreferencesCheckBox";


interface Props {
    setNo: any;
    setRoundTrips: any;
}

let Form = styled.form`
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 800px) {
        flex-direction: column;
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

let RowFlexBoxPreferences = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin: 0;
    padding: 0;

    @media (min-width: 476px) {
        margin-top: 1em;
        margin-bottom: 1em;
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

let WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
`;

let OuterWrapperPreferences = styled.div`
    display: flex;
    flex-direction: row;
`;

let InnerWrapperPreferences = styled.div`
    display: flex;
    flex-direction: column;
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

export const CarouselInputRoundTrips: FunctionComponent<Props> = ({setRoundTrips, setNo}) => {
    const [numberOfPersons, setNumberOfPersons] = useState<number>(1);
    const [dateFrom, setDateFrom] = useState<any>();
    const [dateTo, setDateTo] = useState<any>();
    const [price, setPrice] = useState<number>(100);
    const [from, setFrom] = useState<string>();
    const [numberOfDestination, setNumberOfDestination] = useState<number>();
    const [dateToBeforeDateFrom, setDateToBeforeDateFrom] = useState(false);
    const [culture, setCulture] = useState<boolean>();
    const [relaxation, setRelaxation] = useState<boolean>();
    const [luxuryFlights, setLuxuryFlights] = useState<boolean>();
    const [beachResort, setBeachResort] = useState<boolean>();
    const [history, setHistory] = useState<boolean>();
    const [adventure, setAdventure] = useState<boolean>();
    const [premiumServices, setPremiumServices] = useState<boolean>();


    const [inputsFilledWrongly, setInputsFilledWrongly] = useState({
        from: false,
        numberOfDestination: false,
        dateFrom: false,
        dateTo: false,
        maximumPrice: false,
        numberOfPersons: false
    });

    let checkInputs = () => {
        let inputsValues = {
            from: !from || from === "",
            dateFrom: !dateFrom || dateFrom === "",
            dateTo: (!dateTo || dateTo === "") || (dateTo && dateFrom && dateFrom !== "" && dateTo !== "" && new Date(dateFrom) > new Date(dateTo)),
            numberOfPersons: !numberOfPersons || numberOfPersons <= 0 || numberOfPersons > 20,
            numberOfDestination: !numberOfDestination || numberOfDestination <= 0 || numberOfDestination > 5,
            maximumPrice: !price || price < 50 || price > 9999
        }
        setInputsFilledWrongly({...inputsValues});
        return inputsValues;
    }


    let getListOfFlights = () => {
        let inputsValues = checkInputs();

        console.log(inputsValues);
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

        axios.get('roundtrip/' + from + '/' + dateFrom + '/' + price
        )
            .then(res => {
                console.log(res.data);
                setRoundTrips([...res.data]);
            })

        let element = document.getElementById('tickets');
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }

    return (
        <Form onSubmit={e => e.preventDefault()}>
            <RowFlexBox>
                <Title>Round trip</Title>
            </RowFlexBox>
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
                        <InputTitle>No. of destinations</InputTitle>
                        <IntegerInput isError={inputsFilledWrongly.numberOfDestination}
                                      placeholder={"between 1 and 5"} value={numberOfDestination}
                                      onChange={(e: any) => {
                                          setNumberOfDestination(e.target.value);
                                      }} min={1} max={5}
                                      type={"number"}/>
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
            <RowFlexBoxPreferences>
                <WrapperInput>
                    <InputTitle>Preferences</InputTitle>
                </WrapperInput>
                <OuterWrapperPreferences>
                    <InnerWrapperPreferences>
                        <PreferencesCheckBox label={"Culture"} id={"pref-check-0"}/>
                        <PreferencesCheckBox label={"Relaxation"} id={"pref-check-1"}/>
                        <PreferencesCheckBox label={"Luxury flights"} id={"pref-check-3"}/>
                        <PreferencesCheckBox label={"Beach resort"} id={"pref-check-4"}/>
                    </InnerWrapperPreferences>
                    <InnerWrapperPreferences>
                        <PreferencesCheckBox label={"History"} id={"pref-check-5"}/>
                        <PreferencesCheckBox label={"Social"} id={"pref-check-6"}/>
                        <PreferencesCheckBox label={"Adventure"} id={"pref-check-7"}/>
                        <PreferencesCheckBox label={"Premium services"} id={"pref-check-8"}/>
                    </InnerWrapperPreferences>
                </OuterWrapperPreferences>
            </RowFlexBoxPreferences>
            <RowFlexBox>
                <FlexBoxColButton>
                    <WrapperInput>
                        <CarouselButton onClick={getListOfFlights} text={"Search for a round trip"}/>
                    </WrapperInput>
                </FlexBoxColButton>
            </RowFlexBox>
        </Form>
    )
}
