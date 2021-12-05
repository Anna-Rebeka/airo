import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent, useEffect, useState} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";
import ModularForm from "./components/input/modular-form/ModularForm";

const store = createStore(() => {
});

interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    width: 100%;
    height: 1280px;
    position: relative;
`

let BackgroundWrapper = styled.div`
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #404040 74%);
`

let ListOfTickets = styled.div`
    width: 100%;
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Root: FunctionComponent<RootProps> = ({dataset}) => {
    let [displayCarousel, setDisplayCarousel] = useState("LEFT");
    let [flightsTicketsFrom, setFlightsTicketsFrom] = useState();
    let [flightsTicketsTo, setFlightTicketsTo] = useState([]);
    let [roundTrips, setRoundTrips] = useState();

    useEffect(() => {
        console.log("changed", flightsTicketsFrom);
    },[flightsTicketsFrom, flightsTicketsTo])

    return (
        <Provider store={store}>
            <BackgroundWrapper>
                <NavigationImpl/>
                <Carousel>
                    <CarouselImageImpl setFlightsTo={setFlightTicketsTo} setFlightsFrom={setFlightsTicketsFrom}
                                       displayCarousel={"RIGHT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"RIGHT"}
                                       imgSource={require("../../public/images/carousel_round_trip.jpg")}/>
                    <CarouselImageImpl setFlightsFrom={setRoundTrips} displayCarousel={"LEFT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"LEFT"} imgSource={require("../../public/images/carousel_plane.jpg")}/>
                </Carousel>
                {
                    flightsTicketsFrom ?
                        <ListOfTickets>
                        </ListOfTickets> : null
                }
                <ModularForm>

                </ModularForm>
                <FooterImpl/>
            </BackgroundWrapper>
        </Provider>
    );
}

export default Root;

const element = document.getElementById('root');
if (element) {
    ReactDOM.render(<Root dataset={Object.assign({}, element.dataset)}/>, element);
}
