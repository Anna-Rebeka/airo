import React, {FunctionComponent, useEffect, useState} from "react";
import BasicImpl from "../sections/BasicImpl";
import {TicketItem} from "./TicketItem";


interface Props {
    dataset: any;
    images: any;
}


export const ReservedTicketsNoRegistered: FunctionComponent<Props> = ({
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
            <TicketItem companyClass={element && element.flight.company && element.flight.company.class}
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
