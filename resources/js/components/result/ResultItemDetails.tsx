import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {Heading3} from "../heading/Heading3";
import {useRoundNumber} from "../../BasicUtils";

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
    no: number;
}

let ResultWrapper = styled.article`
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: left;
    display: block;
    color: white;
    border: 1px gray solid;
    background-color: rgb(100, 100, 100);
`;

let ResultImg = styled.img`
    width: 280px;
    height: auto;
    float: left;
    margin-right: 15px;

    @media (min-width: 772px) {
        width: 300px;
    };

    @media (min-width: 1060px) {
        width: 320px;
    };

    @media (min-width: 1280px) {
        width: 340px;
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
    flex-direction: row;
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
    align-items: center;
    padding: 0;
`

let WrapperDetails = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0.5em;
    padding: 0;
`


export const ResultItemDetails: FunctionComponent<Props> = ({
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
                <WrapperContentColDescription>
                    <WrapperDetails>
                        <Element>
                            <ElementTitle>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (useRoundNumber(price)) + " €"}</ElementTitle>
                        </Element>
                        <Element>{"Departure time: " + leaves}</Element>
                        <Element>{"Estimated arrival time: " + arrives}</Element>
                        <Element>{"Flight company: " + companyName + "*".repeat(companyClass)}</Element>
                        <Element>{"Distance between cities is " + useRoundNumber(distance) + "km."}</Element>
                        <Element>{"Duration of flight is " + useRoundNumber(duration) + " mins."}</Element>
                        <Element>{"Description: " + description}</Element>
                    </WrapperDetails>
                </WrapperContentColDescription>
            </RowWrapper>
        </ResultWrapper>
    );
}
