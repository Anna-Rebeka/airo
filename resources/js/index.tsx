import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent, useEffect, useState} from 'react';
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
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

let Heading1 = styled.h1`
    color: white;
`

let images =
    [{name: "/images/cities/bratislava.jpg", url: require("../../public/images/cities/bratislava.jpg")},
        {name: "/images/cities/default.jpg", url: require("../../public/images/cities/default.jpg")},
        {name: "/images/cities/newyork.jpg", url: require("../../public/images/cities/newyork.jpg")},
        {name: "/images/cities/tokyo.jpg", url: require("../../public/images/cities/tokyo.jpg")},
        {name: "/images/cities/paris.jpg", url: require("../../public/images/cities/paris.jpg")},
        {name: "/images/cities/rome.jpg", url: require("../../public/images/cities/rome.jpg")},
        {name: "/images/cities/praha.jpg", url: require("../../public/images/cities/praha.jpg")},
    ];


const Root: FunctionComponent<RootProps> = ({dataset}) => {
    const [displayCarousel, setDisplayCarousel] = useState("LEFT");
    const [flightsFrom, setFlightsFrom] = useState<any>([]);
    const [flightsTicketsTo, setFlightTicketsTo] = useState();
    const [roundTrips, setRoundTrips] = useState();
    const [user, setUser] = useState();


    useEffect(() => {
        setUser(dataset.user);
    },[dataset])

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
                <ListOfTickets id={"tickets"}>
                    {flightsFrom.length !== 0 ?
                        <>
                            <Heading1>
                                Found tickets
                            </Heading1>
                            {flightsFrom.map((element: any, index: number) =>
                                <ResultItem companyClass={element && element.company && element.company.class}
                                            companyName={element && element.company && element.company.name}
                                            dateAndTime={"2012"}
                                            distance={element && element.distance}
                                            duration={element && element.duration}
                                            images={images} key={"result-item-flights" + index}
                                            imgSrc={element && element.arrival && element.arrival.image}
                                            price={element.price}
                                            description={element && element.arrival && element.arrival.info}
                                            altText={element.altText} arrival={element.arrival}
                                            departure={element.departure}/>
                            )}
                        </> : null
                    }
                </ListOfTickets>
                <ModularForm userExist={user !== null}/>
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
} else {
    element = document.getElementById('gallery');
    ReactDOM.render(<GalleryImpl images={images}/>, element);
}
