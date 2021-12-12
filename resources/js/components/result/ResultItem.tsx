import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import ModularFormForBooking from "../input/modular-form/ModularFormForBooking";
import {Heading3} from "../heading/Heading3";

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
    no: number;
}

let ResultWrapper = styled.article`
    position: relative;
    overflow: hidden;
    width: 80%;
    text-align: left;
    display: block;
    color: white;
    padding: 5px;
    border: 1px gray solid;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
    }

    @media (min-width: 772px) {
        width: 50%;
    };

    @media (min-width: 1060px) {
        width: 75%;
    };

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

let ElementTitle = styled(Heading3)`
    text-decoration: underline;
    margin: 0.2em 0;
`

let Element = styled.li`
    color: white;
    margin: 0;
    list-style: none;
`

let WrapperContentCol = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
`

let WrapperContentColDescription = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;

    @media (min-width: 476px) {
        width: 70%;
    };
`

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 0;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0.5em;
`


export const ResultItem: FunctionComponent<Props> = ({
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
                                                         distance,
                                                         element,
                                                         setUser,
                                                         user,
                                                         setFlightsFrom,
                                                         no
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
                <WrapperContentColDescription>
                    <WrapperDetails>
                        <Element>
                            <ElementTitle>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (price) + " €"}</ElementTitle>
                        </Element>
                        <Element>{"Departure time: " + leaves}</Element>
                        <Element>{"Estimated arrival time: " + arrives}</Element>
                        <Element>{"Flight company: " + companyName + "*".repeat(companyClass)}</Element>
                        <Element>{"Distance between cities is " + distance + "km."}</Element>
                        <Element>{"Duration of flight is " + duration + " minutes."}</Element>
                    </WrapperDetails>
                </WrapperContentColDescription>
                <WrapperContentCol>
                    <ModularFormForBooking no={no} withActivationButton={true} user={user} setUser={setUser}
                                           element={element}/>
                </WrapperContentCol>
            </RowWrapper>
        </ResultWrapper>
    );
}

export default ResultItem;
