import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {increaseIndex} from "../../BasicUtils";
import {CarouselImg} from "./CarouselImg";

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
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    font-size: 4em;
    color: black;
    text-align: center;
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

    console.log(images);
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
            <Text>
                Find a holiday of your dreams.
            </Text>
            {children}
        </CarouselCoreDiv>
    );
}
