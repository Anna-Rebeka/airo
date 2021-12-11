import ReactDOM from 'react-dom';

import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";
import ResultItem from "./components/result/ResultItem";
import {GalleryImpl} from "./components/sections/GalleryImpl";
import {MyFlightsImpl} from "./components/sections/MyFlightsImpl";
import {ContactsImpl} from "./components/sections/ContactsImpl";
import BasicImpl from "./components/sections/BasicImpl";

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
}

