import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {increaseIndex} from "../../BasicUtils";
import {CarouselImg} from "./CarouselImg";
import AutoCompleteInput from "../input/auto-complete/AutoCompleteInput";
import {ButtonHref} from "../button/ButtonHref";

interface Props {
    className?: string;
    imageTickInterval: number;
    images: any[];
}

let CarouselCoreDiv = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 93vh;
`;

let Text = styled.p`
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    font-size: 3em;
    color: black;
    text-align: center;

    @media (min-width: 772px) {
        font-size: 4em;
    }
`

let WrapperCenterDiv = styled.div`
    top: 20%;
    position: absolute;
    width: 100%;
`

let WrapperInput = styled.div`
    display: flex;
    margin-right: 3em;
    flex-direction: column;
`;

let WrapperParagraph = styled.p`
    color: black;
`;

let InputGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const CarouselImpl: FunctionComponent<Props> = ({
                                                           className,
                                                           images,
                                                           imageTickInterval,
                                                           children
                                                       }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imgIndex) => increaseIndex(imgIndex, images));
        }, imageTickInterval);
        return () => {
            clearInterval(interval);
        }
    }, [images]);

    return (
        <CarouselCoreDiv className={className}>
            {
                images && images.map((image: any, index: number) =>
                    (
                        <CarouselImg fullOpacity={imageIndex === index}
                                     src={image && image.url.default}
                                     alt={"carousel-img-" + index}
                                     key={"carousel-img-" + index}
                        />
                    )
                )
            }
            <WrapperCenterDiv>
                <Text>
                    Find a holiday of your dreams.
                </Text>

                <InputGroup>
                    <WrapperInput>
                        <WrapperParagraph>From</WrapperParagraph>
                        <AutoCompleteInput/>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperParagraph>To</WrapperParagraph>
                        <AutoCompleteInput/>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperParagraph>No. of days</WrapperParagraph>
                        <AutoCompleteInput/>
                    </WrapperInput>
                    <ButtonHref href={"/search"} text={"Search"}/>

                </InputGroup>


            </WrapperCenterDiv>
            {children}
        </CarouselCoreDiv>
    );
}
