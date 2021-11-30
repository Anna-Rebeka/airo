import React, {FunctionComponent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {CarouselInputFlights} from "./CarouselInputFlights";
import {CarouselInputRoundTrips} from "./CarouselInputRoundTrips";

interface Props {
    displayCarousel: boolean;
    imgSource: any;
    side: string;
    setDisplayedSide: any;
}


let TextTitle = styled.p<{ side: string }>`
    color: white;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
    margin: 0;
`

let TextDescription = styled.p<{ side: string }>`
    max-width: 60%;
    color: white;
    font-size: 1.8em;
    text-shadow: 0 5px 8px black;
    margin: 0.35em 0;
`

let SideText = styled.div<{ isHovered: boolean }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    width: 17.6%;
    height: 100%;
    color: ${p => p.isHovered ? "#FF7F2A" : "white"};
    background: ${p => p.isHovered ? "none" : "rgba(26,26,20, 0.7)"};
    font-size: 2em;
    cursor: pointer;
    z-index: 10;
    transition: background 1.5s ease, 0.7s color ease;
`

let TextSideParagraph = styled.p`
    font-size: 1em;
    margin: 0.25em 0;
`;

let SvgWrapper = styled.div<{ isHovered: boolean }>`
    color: ${p => p.isHovered ? "#FF7F2A" : "white"};
    width: 50px;
    display: flex;
    align-items: center;
    transition: 0.7s color ease;
`;

let Wrapper = styled.div<{ side: string, displayCarousel: boolean }>`
    position: absolute;
    top: 0;
    left: ${p => (p.side === "LEFT" && !p.displayCarousel) ? "-70%" : p.side === "LEFT" ? 0 : "15%"};
    box-shadow: 2px 3px 8px 1px rgba(22, 23, 24, 1);
    width: 85vw;
    height: 100%;
    overflow: hidden;

    :hover {
        opacity: 1;
    }

    transition: width 2s linear, opacity 2s linear, z-index 2s linear, left 1.25s ease;
`

let CarouselImgOpacityImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

let TextWrapper = styled.div<{ side: string }>`
    top: ${p => p.side === "LEFT" ? "20%" : "20%"};
    //bottom: ${p => p.side === "RIGHT" ? "20%" : "auto"};
    left: ${p => p.side === "LEFT" ? "5%" : "5%"};
    right: 0;
    //right: ${p => p.side === "RIGHT" ? "5%" : "auto"};
    position: absolute;
    display: flex;
    align-items: ${p => p.side === "RIGHT" ? "flex-start" : "flex-start"}; //flex-end
    flex-direction: column;
`;

let SideTextInsideWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

let SideTextWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`


export const CarouselImageImpl: FunctionComponent<Props> = ({
                                                                displayCarousel,
                                                                imgSource,
                                                                side,
                                                                setDisplayedSide,
                                                                children
                                                            }) => {

    let leftText = {
        title: "Looking for a flight?",
        description: "We offer tickets from multiple airline companies. You can choose a ticket which is tailored for your needs.",
        imageAlt: "Plane in skies",
        iconAlt: "Icon for showing direction to right",
        sideText: "Looking for a flight ticket?"

    }
    let rightText = {
        title: "  Are you interested in a round trip?",
        description: " Choose your starting point, budget and number of places you want to visit. Round trips will be based on your input and your preferences.",
        imageAlt: "Shown round with mountains",
        iconAlt: "Icon for showing direction to left",
        sideText: "Interested in a round trip?"
    }

    let text = side === "LEFT" ? leftText : rightText;
    let [isHovered, setIsHovered] = useState(false);
    let [showSideText, setShowSideText] = useState(false);

    useEffect(() => {
        return () => {

        }
    }, [displayCarousel]);

    return (
        <Wrapper side={side} displayCarousel={displayCarousel}
                 onTransitionEnd={(e: any) => {
                     e && e.propertyName === "left" ? setShowSideText(true) : null
                 }}>
            <CarouselImgOpacityImg src={imgSource.default} alt={text.imageAlt}/>
            {displayCarousel ?
                <>
                    {side === "LEFT" ?
                        <CarouselInputFlights/> :
                        <CarouselInputRoundTrips/>
                    }

                    <TextWrapper side={side}>
                        <TextTitle side={side}>
                            {text.title}
                        </TextTitle>
                        <TextDescription side={side}>
                            {text.description}
                        </TextDescription>
                    </TextWrapper>

                </> :
                showSideText || !displayCarousel ?
                    <SideText
                        isHovered={isHovered} onMouseEnter={() => {
                        setIsHovered(true);
                    }

                    } onClick={() => {
                        side === "LEFT" ? setDisplayedSide("LEFT") : setDisplayedSide("RIGHT");
                        setIsHovered(false);
                        setShowSideText(false);
                    }}
                        onMouseLeave={() => setIsHovered(false)}>
                        <SideTextInsideWrapper>
                            <SvgWrapper isHovered={isHovered}>
                                {side === "RIGHT" ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0V0z" fill="none"/>
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                                    </svg>
                                }
                            </SvgWrapper>
                            <SideTextWrapper>
                                <TextSideParagraph>
                                    {text.sideText}
                                </TextSideParagraph>
                            </SideTextWrapper>
                        </SideTextInsideWrapper>
                    </SideText> : null

            }
        </Wrapper>
    )


}
