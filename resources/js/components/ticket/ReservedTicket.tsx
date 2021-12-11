import React, {FunctionComponent, useEffect, useState} from "react";

import styled from "@emotion/styled";
import ResultItem from "../result/ResultItem";
import BasicImpl from "../sections/BasicImpl";


interface Props {
    dataset: any;
    images: any;
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


const ReservedTicketsNoRegistered: FunctionComponent<Props> = ({
                                                                   images,
                                                                   dataset
                                                               }) => {

    let element = JSON.parse(dataset.ticket);
    const [user, setUser] = useState<any>();

    useEffect(() => {
        setUser(JSON.parse(dataset.user));
    }, [dataset])

    return (
        <BasicImpl id={"main"} user={user} setUser={setUser}>
            <ResultItem no={1} companyClass={element && element.flight.company && element.flight.company.class}
                        companyName={element && element.flight.company && element.flight.company.name}
                        arrives={element && element.flight.arrives}
                        leaves={element && element.flight.leaves}
                        distance={element && element.flight.distance}
                        duration={element && element.flight.duration}
                        images={images} key={"result-item-flights" + element.flight.arrival.image}
                        imgSrc={element && element.flight.arrival && element.flight.arrival.image}
                        price={element.flight.price}
                        description={element && element.flight.arrival && element.flight.arrival.info}
                        altText={element.altText} arrival={element.flight.arrival}
                        departure={element.flight.departure}
                        element={element}
                        user={user}
                        setUser={setUser}
                        setFlightsFrom={element.flight.leaves}
            />

        </BasicImpl>
    );
}

export default ReservedTicketsNoRegistered;
