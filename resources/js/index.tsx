import ReactDOM from 'react-dom';

import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";
import ResultItem from "./components/result/ResultItem";
import {GalleryImpl} from "./components/sections/GalleryImpl";
import {MyFlightsImpl} from "./components/sections/MyFlightsImpl";
import {ContactsImpl} from "./components/sections/ContactsImpl";
import BasicImpl from "./components/sections/BasicImpl";
import {PageNotFound} from "./components/not-found/PageNotFound";

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

let ListOfTickets = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
`

let Heading1 = styled.h1`
    color: white;
`

let images =
    [{name: "bratislava", url: require("../../public/images/bratislava.jpg")},
        {name: "newyork", url: require("../../public/images/newyork.jpg")},
        {name: "tokyo", url: require("../../public/images/tokyo.jpg")},
        {name: "paris", url: require("../../public/images/paris.jpg")},
        {name: "rome", url: require("../../public/images/rome.jpg")},
        {name: "prague", url: require("../../public/images/praha.jpg")},
        {name: "default0", url: require("../../public/images/default0.jpg")},
        {name: "default1", url: require("../../public/images/default1.jpg")},
        {name: "default2", url: require("../../public/images/default2.jpg")},
        {name: "default3", url: require("../../public/images/default3.jpg")},
        {name: "default4", url: require("../../public/images/default4.jpg")},
        {name: "default5", url: require("../../public/images/default5.jpg")},
        {name: "default6", url: require("../../public/images/default6.jpg")},
        {name: "default7", url: require("../../public/images/default7.jpg")},
        {name: "default8", url: require("../../public/images/default8.jpg")},
        {name: "default9", url: require("../../public/images/default9.jpg")},
    ];


const Root: FunctionComponent<RootProps> = ({dataset}) => {
    const [displayCarousel, setDisplayCarousel] = useState("LEFT");
    const [flightsFrom, setFlightsFrom] = useState<any>([]);
    const [flightsTicketsTo, setFlightTicketsTo] = useState();
    const [roundTrips, setRoundTrips] = useState();
    const [user, setUser] = useState();


    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    return (
        <BasicImpl id={"main"} user={user} setUser={setUser}>
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
                                        arrives={element && element.arrives}
                                        leaves={element && element.leaves}
                                        distance={element && element.distance}
                                        duration={element && element.duration}
                                        images={images} key={"result-item-flights" + index}
                                        imgSrc={element && element.arrival && element.arrival.image}
                                        price={element.price}
                                        description={element && element.arrival && element.arrival.info}
                                        altText={element.altText} arrival={element.arrival}
                                        departure={element.departure}
                                        element={element}
                                        user={user}
                                        setUser={setUser}
                                        setFlightsFrom={setFlightsFrom}
                            />
                        )}
                    </> : null
                }
            </ListOfTickets>
        </BasicImpl>
    );
}

export default Root;

let elementMain = document.getElementById('root');
let elementGallery = document.getElementById('gallery');
let elementMyFlights = document.getElementById('myflights');
let elementContacts = document.getElementById('contacts');
let elementPageNotFound = document.getElementById('e404');

if (elementMain) {
    ReactDOM.render(<Root dataset={Object.assign({}, elementMain.dataset)}/>, elementMain);
} else if (elementGallery) {
    ReactDOM.render(<GalleryImpl setUser={null} images={images}
                                 dataset={Object.assign({}, elementGallery.dataset)}/>, elementGallery);
} else if (elementMyFlights) {
    ReactDOM.render(<MyFlightsImpl flights={[]}
                                   dataset={Object.assign({}, elementMyFlights.dataset)}/>, elementMyFlights);
} else if (elementContacts) {
    ReactDOM.render(<ContactsImpl dataset={Object.assign({}, elementContacts.dataset)}/>, elementContacts);
} else if (elementPageNotFound) {
    ReactDOM.render(<PageNotFound/>, elementPageNotFound);
}

