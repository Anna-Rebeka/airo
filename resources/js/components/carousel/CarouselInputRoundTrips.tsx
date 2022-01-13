import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";
import axios from "axios";
import {Heading2} from "../heading/Heading2";
import {Heading3} from "../heading/Heading3";
import {Error} from "../input/auto-complete/Error";
import PreferencesCheckBox from "../checkbox/PreferencesCheckBox";
import IconCheckBox from "../checkbox/IconCheckBox";


interface Props {
    setNo: any;
    setRoundTrips: any;
    currentSide: string;
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

let RowFlexBoxCentered = styled.ul`
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

let OuterWrapperIconsPrefs = styled.div`
    display: flex;
    flex-direction: column;
`;

let InnerWrapperPreferences = styled.div`
    display: flex;
    flex-direction: column;
`;

let InnerWrapperIcons = styled.div`
    display: flex;
    flex-direction: row;
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

export const CarouselInputRoundTrips: FunctionComponent<Props> = ({setRoundTrips, currentSide, setNo}) => {
    const [numberOfPersons, setNumberOfPersons] = useState<number>(1);
    const [dateFrom, setDateFrom] = useState<any>();
    const [dateTo, setDateTo] = useState<any>();
    const [price, setPrice] = useState<number>(100);
    const [from, setFrom] = useState<string>();
    const [numberOfDestination, setNumberOfDestination] = useState<number>();
    const [dateToBeforeDateFrom, setDateToBeforeDateFrom] = useState(false);
    const [culture, setCulture] = useState<boolean>(true);
    const [relaxation, setRelaxation] = useState<boolean>(true);
    const [luxuryFlights, setLuxuryFlights] = useState<boolean>(false);
    const [beachResort, setBeachResort] = useState<boolean>(false);
    const [history, setHistory] = useState<boolean>(true);
    const [social, setSocial] = useState<boolean>(false);
    const [adventure, setAdventure] = useState<boolean>(true);
    const [premiumServices, setPremiumServices] = useState<boolean>(false);


    const [inputsFilledWrongly, setInputsFilledWrongly] = useState({
        from: false,
        numberOfDestination: false,
        dateFrom: false,
        dateTo: false,
        maximumPrice: false,
        numberOfPersons: false,
        checkBoxes: false
    });

    let checkInputs = () => {
        let inputsValues = {
            from: !from || from === "",
            dateFrom: !dateFrom || dateFrom === "",
            dateTo: (!dateTo || dateTo === "") || (dateTo && dateFrom && dateFrom !== "" && dateTo !== "" && new Date(dateFrom) > new Date(dateTo)),
            numberOfPersons: !numberOfPersons || numberOfPersons <= 0 || numberOfPersons > 20,
            numberOfDestination: !numberOfDestination || numberOfDestination <= 0 || numberOfDestination > 5,
            maximumPrice: !price || price < 50 || price > 9999,
            checkBoxes: !culture && !relaxation && !luxuryFlights && !beachResort && !history && !social && !adventure && !premiumServices
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

        axios.get('roundtrips/' + from + '/' + dateFrom + '/' + dateTo + '/' + numberOfDestination + '/' + price + '/' + culture + '/' +
            relaxation + '/' + luxuryFlights + '/' + beachResort + '/' + history + '/' + history + '/' + social + '/' + adventure + '/' + premiumServices
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
            {currentSide === "RIGHT" ?
                <>
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
                    <RowFlexBoxCentered>
                        <WrapperInput>
                            <InputTitle>Preferences</InputTitle>
                        </WrapperInput>
                        <OuterWrapperIconsPrefs>
                            <InnerWrapperPreferences>
                                <PreferencesCheckBox value={culture} setValue={setCulture} label={"Culture"}
                                                     id={"pref-check-0"}/>
                                <PreferencesCheckBox value={relaxation} setValue={setRelaxation} label={"Relaxation"}
                                                     id={"pref-check-1"}/>
                                <PreferencesCheckBox value={luxuryFlights} setValue={setLuxuryFlights}
                                                     label={"Luxury flights"} id={"pref-check-3"}/>
                                <PreferencesCheckBox value={beachResort} setValue={setBeachResort}
                                                     label={"Beach resort"} id={"pref-check-4"}/>
                            </InnerWrapperPreferences>
                            <InnerWrapperPreferences>
                                <PreferencesCheckBox value={history} setValue={setHistory} label={"History"}
                                                     id={"pref-check-5"}/>
                                <PreferencesCheckBox value={social} setValue={setSocial} label={"Social"}
                                                     id={"pref-check-6"}/>
                                <PreferencesCheckBox value={adventure} setValue={setAdventure} label={"Adventure"}
                                                     id={"pref-check-7"}/>
                                <PreferencesCheckBox value={premiumServices} setValue={setPremiumServices}
                                                     label={"Premium services"} id={"pref-check-8"}/>
                            </InnerWrapperPreferences>
                        </OuterWrapperIconsPrefs>
                        {inputsFilledWrongly.checkBoxes ?
                            <Error>
                                At least one of the checkboxes must be checked.
                            </Error> :
                            null}
                    </RowFlexBoxCentered>
                </> :
                <>
                    <RowFlexBox>
                        <FlexBoxCol>
                            <WrapperInput>
                                <InputTitle>From</InputTitle>
                                <AutoCompleteInput isError={inputsFilledWrongly.from} setMethod={setFrom}
                                                   placeholder={"Departure city"}/>
                            </WrapperInput>
                        </FlexBoxCol>
                        <RowFlexBoxCentered>
                            <WrapperInput>
                                <InputTitle>No. of destinations</InputTitle>
                            </WrapperInput>
                            <OuterWrapperIconsPrefs>
                                <InnerWrapperIcons>
                                    <IconCheckBox
                                        icon={require("../../../../public/images/destinationNumber/two.png").default}
                                        value={culture} setValue={setCulture} label={"Two"}
                                        id={"destination-number-icon-0"}/>
                                    <IconCheckBox
                                        icon={require("../../../../public/images/destinationNumber/three.png").default}
                                        value={culture} setValue={setCulture} label={"Three"}
                                        id={"destination-number-icon-0"}/>
                                    <IconCheckBox
                                        icon={require("../../../../public/images/destinationNumber/four.png").default}
                                        value={culture} setValue={setCulture} label={"Four"}
                                        id={"destination-number-icon-0"}/>
                                    <IconCheckBox
                                        icon={require("../../../../public/images/destinationNumber/five.png").default}
                                        value={culture} setValue={setCulture} label={"Five"}
                                        id={"destination-number-icon-0"}/>
                                </InnerWrapperIcons>
                            </OuterWrapperIconsPrefs>
                        </RowFlexBoxCentered>
                    </RowFlexBox>
                    <RowFlexBoxCentered>
                        <WrapperInput>
                            <InputTitle>Preferences</InputTitle>
                        </WrapperInput>
                        <OuterWrapperIconsPrefs>
                            <InnerWrapperIcons>
                                <IconCheckBox
                                    icon={require("../../../../public/images/preferences/culture.png").default}
                                    value={culture} setValue={setCulture} label={"Culture"}
                                    id={"pref-check-icon-0"}/>
                                <IconCheckBox icon={require("../../../../public/images/preferences/relax.png").default}
                                              value={relaxation} setValue={setRelaxation} label={"Relaxation"}
                                              id={"pref-check-icon-1"}/>
                                <IconCheckBox icon={require("../../../../public/images/preferences/luxury.png").default}
                                              value={luxuryFlights} setValue={setLuxuryFlights}
                                              label={"Luxury flights"} id={"pref-check-icon-3"}/>
                                <IconCheckBox icon={require("../../../../public/images/preferences/beach.png").default}
                                              value={beachResort} setValue={setBeachResort}
                                              label={"Beach resort"} id={"pref-check-icon-4"}/>
                            </InnerWrapperIcons>
                            <InnerWrapperIcons>
                                <IconCheckBox
                                    icon={require("../../../../public/images/preferences/history.png").default}
                                    value={history} setValue={setHistory} label={"History"}
                                    id={"pref-check-icon-5"}/>
                                <IconCheckBox icon={require("../../../../public/images/preferences/social.png").default}
                                              value={social} setValue={setSocial} label={"Social"}
                                              id={"pref-check-icon-6"}/>
                                <IconCheckBox
                                    icon={require("../../../../public/images/preferences/adventure.png").default}
                                    value={adventure} setValue={setAdventure} label={"Adventure"}
                                    id={"pref-check-icon-7"}/>
                                <IconCheckBox icon={require("../../../../public/images/preferences/crown.png").default}
                                              value={premiumServices} setValue={setPremiumServices}
                                              label={"Premium services"} id={"pref-check-icon-8"}/>
                            </InnerWrapperIcons>
                        </OuterWrapperIconsPrefs>
                    </RowFlexBoxCentered>
                    <RowFlexBoxCentered>
                        <WrapperInput>
                            <InputTitle>Maximum price</InputTitle>
                        </WrapperInput>
                        <OuterWrapperIconsPrefs>
                            <InnerWrapperIcons>
                                <IconCheckBox
                                    icon={require("../../../../public/images/price/cheap.png").default}
                                    value={history} setValue={setHistory} label={"Cheap"}
                                    id={"pref-check-icon-5"}/>
                                <IconCheckBox icon={require("../../../../public/images/price/average.png").default}
                                              value={social} setValue={setSocial} label={"Average"}
                                              id={"pref-check-icon-6"}/>
                                <IconCheckBox
                                    icon={require("../../../../public/images/price/expensive.png").default}
                                    value={adventure} setValue={setAdventure} label={"Expensive"}
                                    id={"pref-check-icon-7"}/>
                            </InnerWrapperIcons>
                        </OuterWrapperIconsPrefs>
                    </RowFlexBoxCentered>
                </>
            }
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
