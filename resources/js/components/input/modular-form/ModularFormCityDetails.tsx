import React, {FunctionComponent, useState} from "react";
import {ModularButton} from "./ModularButton";
import {ModularFormRoot} from "./ModularFormRoot";
import {ResultItemDetails} from "../../result/ResultItemDetails";

interface Props {
    shouldBeActivated: boolean;
    withActivationButton: boolean;
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

export const ModularFormCityDetails: FunctionComponent<Props> = ({
                                                                     shouldBeActivated,
                                                                     withActivationButton,
                                                                     images,
                                                                     imgSrc,
                                                                     description,
                                                                     altText,
                                                                     arrival,
                                                                     departure,
                                                                     price,
                                                                     distance,
                                                                     duration,
                                                                     companyName,
                                                                     companyClass,
                                                                     arrives,
                                                                     leaves,
                                                                     setUser,
                                                                     user,
                                                                     no,
                                                                     element
                                                                 }) => {
    let [display, setDisplay] = useState(shouldBeActivated);

    return (
        <>
            {display ?
                <ModularFormRoot setDisplay={setDisplay} title={"City details"}>
                    <ResultItemDetails imgSrc={imgSrc} price={price} description={description} no={no} user={user}
                                       setUser={setUser} element={element}
                                       arrival={arrival} arrives={arrives} leaves={leaves} distance={distance}
                                       duration={duration} images={images} companyName={companyName} altText={altText}
                                       departure={departure} companyClass={companyClass}/>

                </ModularFormRoot> : null
            }
            {
                withActivationButton ?
                    <ModularButton type={"submit"} name={"details"} value={"details"}
                                   text={"Details"} id="detailsCity"
                                   setOnClickValueMethod={() => {
                                       setDisplay(true);
                                   }}/>
                    : null
            }
        </>
    );
}
