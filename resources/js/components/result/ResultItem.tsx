import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import ModularForm from "../input/modular-form/ModularForm";

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

let ResultWrapper = styled.div`
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
        padding: 5px;
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

let ResultH2 = styled.h2`
    color: white;
    position: relative;
    margin: 0;
    float: left;
    text-decoration: underline;
`

let ResultH3 = styled.h3`
    color: white;
    position: relative;
    margin: 0;
    float: left;
`

let ResultDescription = styled.p`
    color: white;
    position: relative;
    float: left;
    margin: 0.2em 0;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    text-align: left;
`

let MainWrapperContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 772px) {
        flex-direction: row;
    };
`

let WrapperContentCol = styled.div`
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

    console.log(images);
    let imgUrl = images.find((obj: any) => {
        console.log(obj);
        if (obj.name === imgSrc) {
            return obj;
        }
    })
    return (
        <ResultWrapper>
            <MainWrapperContent>
                <WrapperContentCol>
                    <ResultImg src={imgUrl && imgUrl.url.default}
                               alt={altText}/>
                </WrapperContentCol>
                <WrapperContentCol>
                    <ResultH2>{(departure && departure.name) + " -> " + (arrival && arrival.name)}{" - " + (price) + " €"}</ResultH2>
                    <ResultH3>{"Departure time: " + leaves + ". Estimated arrival time: " + arrives}</ResultH3>
                    <ResultH3>{"Flight by company " + companyName + "*".repeat(companyClass)}</ResultH3>
                    <ResultH3>{"Distance between cities is " + distance + "km." + " Duration of flight is " + duration + " minutes."}</ResultH3>
                    <ResultDescription>{description}</ResultDescription>
                </WrapperContentCol>
                <WrapperContentCol>
                    <ModularForm user={user} setUser={setUser} element={element} setFlightsFrom={setFlightsFrom}/>
                </WrapperContentCol>
            </MainWrapperContent>
        </ResultWrapper>
    );
}

export default ResultItem;
