import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent, useState} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";
import ModularForm from "./components/input/modular-form/ModularForm";
import ResultItem from "./components/result/ResultItem";
import {ScrollTopElementButton} from "./components/scroll/ScrollTopElementButton";
import {GalleryImpl} from "./components/gallery/GalleryImpl";

const store = createStore(() => {
});

interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    width: 100%;
    height: 800px;
    position: relative;

    @media (min-width: 576px) {
       height: 1280px;
    }
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
    const [displayCarousel, setDisplayCarousel] = useState("LEFT");
    const [flightsFrom, setFlightsFrom] = useState<any>([]);
    const [flightsTicketsTo, setFlightTicketsTo] = useState();
    const [roundTrips, setRoundTrips] = useState();

    return (
        <Provider store={store}>
            <BackgroundWrapper>
                <NavigationImpl/>
                <Carousel>
                    <CarouselImageImpl setFlightsTo={setFlightTicketsTo} setFlightsFrom={setRoundTrips}
                                       displayCarousel={"RIGHT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"RIGHT"}
                                       imgSource={require("../../public/images/carousel_round_trip.jpg")}/>
                    <CarouselImageImpl setFlightsFrom={setFlightsFrom} setFlightsTo={setFlightTicketsTo}
                                       displayCarousel={"LEFT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"LEFT"} imgSource={require("../../public/images/carousel_plane.jpg")}/>
                </Carousel>
                {
                    flightsFrom ?
                        <ListOfTickets id={"tickets"}>
                            {
                                flightsFrom.map((element: any, index: number) =>
                                    <ResultItem key={"result-item-flights" + index} imgSrc={element.imgSrc}
                                                price={element.price} description={element.description}
                                                altText={element.altText} arrival={element.arrival}
                                                departure={element.departure}/>
                                )
                            }
                        </ListOfTickets> : null
                }
                <ModularForm/>
                <ScrollTopElementButton/>
                <FooterImpl/>
            </BackgroundWrapper>
        </Provider>
    );
}

export default Root;

let element = document.getElementById('root');
if (element) {
    ReactDOM.render(<Root dataset={Object.assign({}, element.dataset)}/>, element);
}
else{
    element = document.getElementById('gallery');
    ReactDOM.render(<GalleryImpl/>, element);
}
