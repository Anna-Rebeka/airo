import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    imgSrc: any;
    description: string;
    altText: string;
    headerText: string;
    price: number;
}

let Result = styled.div`
    position: relative;
    overflow: hidden;
    width: 50%;
    text-align: left;
    display: block;
    left: 30%;
    color: white;
    padding: 5px;
    border: 1px gray solid;

    :nth-child(odd)
    {
        background-color: rgb(100, 100, 100);
        padding: 5px;
    }
`;

let ResultImg = styled.img`
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 15px;
`;

let ResultH2 = styled.h2`
    color: white;
    position: relative;
    margin: 0;
    float: left;
    text-decoration: underline;
`;


let Description = styled.p`
    color: white;
    position: relative;
    float: left;
    height: 150px;
    width: 400px;
    margin: 5px;
    overflow: hidden;
    text-align: left;
    text-decoration: none;
`;


let ResultWrapper = styled.div`
`;

export const ResultItem: FunctionComponent<Props> = ({imgSrc, description, altText,
                                                         headerText, price}) =>
{
    return (
        <ResultWrapper>
            <Result>
                <ResultImg srcSet={imgSrc} alt={altText} /><ResultH2>{headerText} - {price} &euro;</ResultH2>
                <Description>{description}</Description>
            </Result>
        </ResultWrapper>
    );
}

export default ResultItem;
