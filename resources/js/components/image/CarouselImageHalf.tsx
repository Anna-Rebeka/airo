import React, {FunctionComponent, useState} from "react";
import styled from "@emotion/styled";
import {ButtonHrefAnother} from "../button/ButtonHrefAnother";


interface Props {
    src: any;
    alt: string;
    side: string;
    className?: string;
    setLeftDisplayed: any;
    leftDisplayed: boolean;
}

let CarouselImgOpacityImg = styled.img<{ side: string, leftDisplayed: boolean, hoverOpacity: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

let HiddenText = styled.div<{ hoverOpacity: boolean, leftDisplayed:boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    color: ${p => p.hoverOpacity ? "white" : "white"};
    font-size: 2.5em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s color;
    z-index: 10;
`

let TextSideParagraph = styled.p`
    margin: 0.25em 0;
`;

let ImgIcon = styled.img<{leftDisplayed: boolean}>`
    position: absolute;
    left:  ${p => p.leftDisplayed ? 0 : "auto"};
    right:  ${p => !p.leftDisplayed ? 0 : "auto"};
    width: 80px;
    height: auto;
`;

let Wrapper = styled.div<{ side: string, leftDisplayed: boolean, hoverOpacity: boolean }>`
    position: absolute;
    left: ${p => (p.side === "LEFT" && !p.leftDisplayed) ? "-70%" : p.side === "LEFT" ? 0 : "15%"};
    //opacity: ${p => (p.side === "LEFT" && p.leftDisplayed) || (p.side === "RIGHT" && !p.leftDisplayed) || p.hoverOpacity ? 1 : 0.35};
    box-shadow: 2px 3px 8px 1px rgba(22, 23, 24, 1);
    //z-index: ${p => (p.side === "LEFT" && p.leftDisplayed) || (p.side === "RIGHT" && !p.leftDisplayed) ? 1000 : 5};
    width: 85%;
    height: 100%;
    overflow: hidden;

    :hover {
        opacity: 1;
    }

    transition: width 2s linear, opacity 2s linear, z-index 2s linear, left 2s linear;
`

export const CarouselImageHalf: FunctionComponent<Props> = ({
                                                                src,
                                                                alt,
                                                                className,
                                                                side,
                                                                children,
                                                                leftDisplayed,
                                                                setLeftDisplayed
                                                            }) => {
    let [hoverOpacity, setHoverOpacity] = useState(false)
    return (
        <Wrapper hoverOpacity={hoverOpacity} leftDisplayed={leftDisplayed} side={side}>
            <CarouselImgOpacityImg hoverOpacity={hoverOpacity} leftDisplayed={leftDisplayed} side={side}
                                   className={className} src={src.url.default}
                                   alt={alt}/>
            {
                side === "LEFT" ?
                    <>
                        {leftDisplayed ?
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

                            <HiddenText leftDisplayed={leftDisplayed} hoverOpacity={hoverOpacity} onMouseEnter={() =>
                                setHoverOpacity(true)
                            } onClick={() => setLeftDisplayed(true)}
                                                 onMouseLeave={() => setHoverOpacity(false)}>
                                <TextSideParagraph>Looking</TextSideParagraph>
                                <TextSideParagraph>for</TextSideParagraph>
                                <TextSideParagraph>a flight ticket?</TextSideParagraph>
                                <ImgIcon alt={"arrow left"}
                                         src={require("../../../../public/images/arrowRight.svg").default}/>
                            </HiddenText>
                        }
                    </> :
                    !leftDisplayed ?
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
                        </> :
                        <HiddenText leftDisplayed={leftDisplayed} hoverOpacity={hoverOpacity} onMouseEnter={() =>
                            setHoverOpacity(true)
                        } onClick={() => setLeftDisplayed(false)}
                                    onMouseLeave={() => setHoverOpacity(false)}>
                            <TextSideParagraph>Interested</TextSideParagraph>
                            <TextSideParagraph>in</TextSideParagraph>
                            <TextSideParagraph>a roundtrip?</TextSideParagraph>
                            <ImgIcon alt={"arrow left"}
                                     src={require("../../../../public/images/arrowLeft.svg").default}/>
                        </HiddenText>
            }
        </Wrapper>

    );
}
