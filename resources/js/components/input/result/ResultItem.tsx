import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    imgSrc: any;
    description: string;
    altText: string;
    headerText: string;
    price: number;
}

let ResultWrapper = styled.div`
    .result
    {
        position: relative;
        overflow: hidden;
        width: 50%;
        text-align: left;
        display: block;
        left: 30%;
        color: white;
        padding: 5px;
        border: 1px gray solid;
    }

    .result img
    {
        width: 100px;
        height: 100px;
        float: left;
        margin-right: 15px;
    }

    .result h2, .description
    {
        color: white;
        position: relative;
        margin: 0px;
        float: left;
        text-decoration: underline;
    }
    .description
    {
        height: 150px;
        width: 400px;
        margin: 5px;
        overflow: hidden;
        text-align: left;
        text-decoration: none;
    }
    .result:nth-child(odd)
    {
        background-color: rgb(100, 100, 100);
        padding: 5px;
    }
`;

export const ResultItem: FunctionComponent<Props> = ({imgSrc, description, altText,
                                                         headerText, price}) =>
{
    return (
        /* pred <img> natiahnut este <a> s odkazom na stranku s detailami? */
        <ResultWrapper>
            <div className="result">
                <img srcSet={imgSrc} alt={altText} /><h2>{headerText} - {price}</h2>
                <br />
                <p className="description">{description}</p>
            </div>
        </ResultWrapper>
    );
}

export default ResultItem;
