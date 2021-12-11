import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    element: any;
    images: any;
    imgSrc: any;
    description: string;
    altText: string;
    arrival: any;
    departure: any;
    price: number;
    distance: number;
    duration: number;
    companyName: string;
    companyClass: number;
    arrives: string;
    leaves: string;
    setUser: any;
    user: any;
    setFlightsFrom: any;
}

let ResultWrapper = styled.article`
    position: relative;
    width: 100%;
    text-align: left;
    display: block;
    color: white;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
    }

    @media (min-width: 1280px) {
    };
`;

let ResultImg = styled.img`
    width: 180px;
    height: auto;
    float: left;
    margin-right: 15px;

    @media (min-width: 772px) {
        width: 200px;
    };

    @media (min-width: 1060px) {
        width: 220px;
    };

    @media (min-width: 1280px) {
        width: 240px;
    };
`

let ResultH2 = styled.h2`
    color: white;
    position: relative;
    margin: 0;
    float: left;
    text-decoration: underline;
`

let Element = styled.li`
    color: white;
    list-style: none;
    margin: 0.2em 0.7em;
    padding: 0;
`

let WrapperContentCol = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0.6em;
    padding: 0;
`

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
`


export const TicketItem: FunctionComponent<Props> = ({
                                                         imgSrc,
                                                         description,
                                                         altText,
                                                         arrival,
                                                         price,
                                                         departure,
                                                         images,
                                                         leaves,
                                                         arrives,
                                                         companyName,
                                                         companyClass,
                                                         duration,
                                                         distance
                                                     }) => {

    let imgUrl = images.find((obj: any) => {
        if (obj.name === imgSrc) {
            return obj;
        }
    })
    return (
        <ResultWrapper>
            <RowWrapper>
                <WrapperContentCol>
                    <ResultImg src={imgUrl && imgUrl.url.default}
                               alt={altText}/>
                </WrapperContentCol>
                <WrapperContentCol>
                    <WrapperDetails>
                        <ResultH2>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (price) + " €"}</ResultH2>
                        <Element>{"Departure time: " + leaves + ". Estimated arrival time: " + arrives}</Element>
                        <Element>{"Flight company: " + companyName + "*".repeat(companyClass)}</Element>
                        <Element>{"Distance between cities is " + distance + "km."}</Element>
                        <Element>{"Duration of flight is " + duration + " minutes."}</Element>
                        <Element>{"Description: " + description}</Element>
                    </WrapperDetails>
                </WrapperContentCol>
            </RowWrapper>
        </ResultWrapper>
    );
}
