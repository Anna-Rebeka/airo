import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import {ButtonHrefAnother} from "../button/ButtonHrefAnother";


interface Props {
    src: any;
    alt: string;
    side: string;
    className?: string;
}

let CarouselImgOpacityImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s linear;
    box-shadow: 2px 3px 8px 1px rgba(22, 23, 24, 1);
`;

let Text = styled.p`
    top: 20%;
    left: 5%;
    position: absolute;
    color: white;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
`

let TextBehind = styled.p`
    top: 30%;
    left: 5%;
    position: absolute;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
`


let TextRight = styled.p`
    bottom: 30%;
    right: 5%;
    position: absolute;
    color: white;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
`

let TextBehindRight = styled.p`
    bottom: 25%;
    right: 5%;
    text-align: right;
    position: absolute;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
`

let AbsoluteDiv = styled.div`
    position: absolute;
    left: 4%;
    top: 40%;
`

let AbsoluteDivRight = styled.div`
    position: absolute;
    right: 4%;
    bottom: 20%;
`

export const CarouselImageHalf: FunctionComponent<Props> = ({
                                                                src,
                                                                alt,
                                                                className,
                                                                side,
                                                                children
                                                            }) => {
    return (
        <>
            <CarouselImgOpacityImg className={className} src={src.url.default} alt={alt}>
            </CarouselImgOpacityImg>
            {
                side === "LEFT" ?
                    <>
                        <Text>
                            Looking for a flight?
                        </Text>
                        <TextBehind>
                            We offer tickets from multiple airline companies.<br/>
                            You can choose a ticket which is tailored for your needs.
                        </TextBehind>
                        <AbsoluteDiv>
                            <ButtonHrefAnother href={"/search"} text={"Book a ticket"}/>
                        </AbsoluteDiv>
                    </> :
                    <>
                        <TextRight>
                            Are you interested in a round trip?
                        </TextRight>
                        <TextBehindRight>
                           Choose your starting point, budget and number of places you want to visit.<br/>
                          Round trips will be based on your input and your preferences.
                        </TextBehindRight>
                        <AbsoluteDivRight>
                            <ButtonHrefAnother href={"/roundtrip"} text={"Search for a round trip"}/>
                        </AbsoluteDivRight>
                    </>
            }
        </>

    );
}
