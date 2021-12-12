import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props
{
    imgSrc : string;
    cityName : string;
    descriptionText : string;
    altText : string;
}

let Detail = styled.div`
    display: none;
    height: 80vh;
    width: 80vw;
    padding: 5px;
    overflow: visible;
    text-decoration: none;
    background-color: rgba(25, 25, 25, 0.95);
    position: fixed;
    right: 10vw;
    z-index: 1;
    top: 5vh;

    //Close button
    button {
        position: relative;
        float: right;
        color: crimson;
        background-color: rgba(0, 0, 0, 0);
        margin: 0;
        top: -25px;
        border: 1px gray solid;
    }

    img {
        width: 250px;
        height: 250px;
    }

    h2 {
        color: red;
        width: 80%;
    }

    p {
        color: orange;
        font-size: 20px;
        width: auto;
        position: relative;
    }

    @media (max-width: 400px)
    {
        display: none;
        height: auto;
        width: auto;
        margin: 0 0 0 5px;
        padding: 5px;
        overflow: scroll;
        text-decoration: none;
        background-color: rgba(25, 25, 25, 0.95);
        position: fixed;
        right: 10vw;
        z-index: 1;
        top: 5vh;
        font-size: 20px;

        button
        {
            position: relative;
            float: right;
            color: red;
            background-color: rgba(0, 0, 0, 0);
            margin: 0;
            bottom: 44vh;
            border: 1px gray solid;
        }
    }
`;




export const Description: FunctionComponent<Props> = ({ imgSrc, descriptionText, cityName, altText}) => {

    return  (
        <>
            <button onClick = {(e:any) => {/* tu vymen display:none -> display:  block*/ }}> Detail </button>
            <Detail>
                <img src={imgSrc} alt={altText} /><h2>{cityName}</h2><button onClick = {(e:any) => {/* tu vymen display:block -> display:none*/ }}>X</button>
                <p>{descriptionText}</p>
            </Detail>
        </>
    );
};
