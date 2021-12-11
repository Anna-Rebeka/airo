import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import ModularFormForBooking from "../input/modular-form/ModularFormForBooking";

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
    overflow: hidden;
    width: 99%;
    text-align: left;
    display: block;
    color: white;
    padding: 5px;
    border: 1px gray solid;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
        padding: 5px;
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
    margin: 0;
`

let ResultDescription = styled.li`
    color: white;
    margin: 0.2em 0;
    width: 100%;
    overflow: hidden;
`

let WrapperContentCol = styled.li`
    display: flex;
    flex-direction: column;
`

let RowWrapper = styled.ul`
    display: flex;
    flex-direction: column;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
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
                                                         setFlightsFrom
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

export default ResultItem;
