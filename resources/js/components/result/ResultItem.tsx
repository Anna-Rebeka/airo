import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {CarouselButton} from "../button/CarouselButton";

interface Props {
    imgSrc: any;
    description: string;
    altText: string;
    arrival: any;
    departure: any;
    price: number;
}

let ResultWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 50%;
    text-align: left;
    display: block;
    color: white;
    padding: 5px;
    border: 1px gray solid;

    :nth-of-type(odd) {
        background-color: rgb(100, 100, 100);
        padding: 5px;
    }
`;

let ResultImg = styled.img`
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 15px;
`

let ResultH2 = styled.h2`
    color: white;
    position: relative;
    margin: 0;
    float: left;
    text-decoration: underline;
`

let ResultDescription = styled.p`
    color: white;
    position: relative;
    float: left;
    height: 150px;
    width: 400px;
    margin: 5px;
    overflow: hidden;
    text-align: left;
    text-decoration: none;
`


export const ResultItem: FunctionComponent<Props> = ({
                                                         imgSrc, description, altText,
                                                         arrival, price, departure
                                                     }) => {
    console.log(imgSrc);
    return (

        /* pred <img> natiahnut este <a> s odkazom na stranku s detailami? */
        <ResultWrapper>
            <div className="result">
                <ResultImg srcSet={imgSrc && require(imgSrc).default}
                           alt={altText}/><ResultH2>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (price) + " €"}</ResultH2>
                <ResultDescription className="description">{description}</ResultDescription>
                <CarouselButton text={"Book"} onClick={null}/>
            </div>
        </ResultWrapper>
    );
}

export default ResultItem;
