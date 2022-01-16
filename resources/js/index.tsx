import ReactDOM from 'react-dom';

import React, {FunctionComponent, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";
import {GalleryImpl} from "./components/sections/GalleryImpl";
import {MyFlightsImpl} from "./components/sections/MyFlightsImpl";

import {ContactsImpl} from "./components/sections/ContactsImpl";
import BasicImpl from "./components/sections/BasicImpl";
import {PageNotFound} from "./components/not-found/PageNotFound";
import {ReservedTicketsNoRegistered} from "./components/ticket/ReservedTicketsNoRegistered";
import {Heading2} from "./components/heading/Heading2";
import {ResultItem} from "./components/result/ResultItem";
import {NavigationDownImpl} from "./components/navigation/NavigationDownImpl";
import useWindowSize from "./BasicUtils";
import {ResultItemRoundTrip} from "./components/result/ResultItemRoundTrip";


interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    width: 100%;
    height: 960px;

    @media (min-width: 476px) {
        height: 1220px;
    };

    @media (min-width: 800px) {
        height: 1320px;
    };

    @media (min-width: 1059px) {
        height: 1620px;
    };
    position: relative;
`

let ListOfTickets = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    background-color: #000000;
    background-image: linear-gradient(0deg, #000000 0%, #404040 100%);
`

let Paragraph = styled.p`
    margin: 2em;
    font-size: 1.8em;
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
    const [flightsFrom, setFlightsFrom] = useState<any>(null);
    const [no, setNo] = useState<number>(1);
    const [flightsTo, setFlightsTo] = useState<any>();
    const [roundTrips, setRoundTrips] = useState<any>();
    const [user, setUser] = useState();
    const [showSecondWay, setShowSecondWay] = useState<any>();
    const [selectedFirstWay, setSelectedFirstWay] = useState();

    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    useEffect(() => {
        setFlightsFrom(undefined);
        setFlightsTo(undefined);
        setRoundTrips(undefined)
    }, [displayCarousel])

    let [width] = useWindowSize();

    return (
        <>
            <BasicImpl id={"main"} user={user} setUser={setUser}>
                <Carousel>
                    <CarouselImageImpl setFlightsFrom={setFlightsFrom} setFlightsTo={setFlightsTo}
                                       currentSide={displayCarousel} setRoundTrips={setRoundTrips} setNo={setNo}
                                       displayCarousel={"RIGHT" === displayCarousel || "RIGHT_ALT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"RIGHT"}
                                       imgSource={require("../../public/images/carousel_round_trip.jpg")}/>
                    <CarouselImageImpl currentSide={displayCarousel} setRoundTrips={setRoundTrips}
                                       setFlightsTo={setFlightsTo} setNo={setNo}
                                       setFlightsFrom={setFlightsFrom}
                                       displayCarousel={"LEFT" === displayCarousel}
                                       setDisplayedSide={setDisplayCarousel}
                                       side={"LEFT"} imgSource={require("../../public/images/carousel_plane.jpg")}/>
                </Carousel>
                <ListOfTickets id={"tickets"}>
                    {!showSecondWay && flightsFrom && flightsFrom.length !== 0 ?
                        <>
                            <Heading2>
                                Found tickets
                            </Heading2>
                            {flightsFrom.map((element: any, index: number) =>
                                <ResultItem
                                    selectedFirstWay={selectedFirstWay}
                                    showSecondWay={showSecondWay}
                                    setSelectedFirstWay={setSelectedFirstWay}
                                    setShowSecondWay={setShowSecondWay}
                                    flightsTo={flightsTo}
                                    no={no}
                                    companyClass={element && element.company && element.company.class}
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
                                />
                            )}
                        </> :
                        !showSecondWay && flightsFrom ?
                            <Paragraph>
                                No flights were found. Please change your inputs.
                            </Paragraph>
                            : null
                    }
                    {showSecondWay && flightsTo && flightsTo.length !== 0 ?
                        <>
                            <Heading2>
                                Found tickets from arrival to departure
                            </Heading2>
                            {flightsTo.map((element: any, index: number) =>
                                <ResultItem
                                    selectedFirstWay={selectedFirstWay}
                                    showSecondWay={showSecondWay}
                                    setSelectedFirstWay={setSelectedFirstWay}
                                    setShowSecondWay={setShowSecondWay}
                                    flightsTo={flightsTo}
                                    no={no}
                                    companyClass={element && element.company && element.company.class}
                                    companyName={element && element.company && element.company.name}
                                    arrives={element && element.arrives}
                                    leaves={element && element.leaves}
                                    distance={element && element.distance}
                                    duration={element && element.duration}
                                    images={images} key={"result-item-flights-second-way" + index}
                                    imgSrc={element && element.arrival && element.arrival.image}
                                    price={element.price}
                                    description={element && element.arrival && element.arrival.info}
                                    altText={element.altText} arrival={element.arrival}
                                    departure={element.departure}
                                    element={element}
                                    user={user}
                                    setUser={setUser}
                                />
                            )}
                        </> :
                        showSecondWay && flightsTo ?
                            <Paragraph>
                                No flights were found. Please change your inputs.
                            </Paragraph>
                            : null
                    }
                    {roundTrips && roundTrips.length !== 0 ?
                        roundTrips.map((roundTrip: any, index: number) => (
                            <ResultItemRoundTrip no={no} user={user} setUser={setUser} key={"result-item-flight-trip" + index} totalPrice={roundTrip.price}
                                                 totalDistance={roundTrip.distance}
                                                 flights={roundTrip.flights}/>))
                        :
                        roundTrips ?
                            <Paragraph>
                                No round trips were found. Please change your inputs.
                            </Paragraph>
                            : null
                    }
                </ListOfTickets>
            </BasicImpl>
            {width < 1060 ?
                <NavigationDownImpl displayCarousel={displayCarousel} setDisplayCarousel={setDisplayCarousel}/> :
                null
            }
        </>
    );
}

export default Root;

let elementMain = document.getElementById('root');
let elementGallery = document.getElementById('gallery');
let elementMyFlights = document.getElementById('myflights');
let elementContacts = document.getElementById('contacts');
let elementPageNotFound = document.getElementById('e404');
let elementTicket = document.getElementById('show-ticket');


if (elementMain) {
    ReactDOM.render(<Root dataset={Object.assign({}, elementMain.dataset)}/>, elementMain);
} else if (elementGallery) {
    ReactDOM.render(<GalleryImpl images={images} dataset={Object.assign({}, elementGallery.dataset)}/>, elementGallery);
} else if (elementMyFlights) {
    ReactDOM.render(<MyFlightsImpl dataset={Object.assign({}, elementMyFlights.dataset)}/>, elementMyFlights);
} else if (elementContacts) {
    ReactDOM.render(<ContactsImpl dataset={Object.assign({}, elementContacts.dataset)}/>, elementContacts);
} else if (elementPageNotFound) {
    ReactDOM.render(<PageNotFound/>, elementPageNotFound);
} else if (elementTicket) {
    ReactDOM.render(<ReservedTicketsNoRegistered images={images}
                                                 dataset={Object.assign({}, elementTicket.dataset)}/>, elementTicket);
}

