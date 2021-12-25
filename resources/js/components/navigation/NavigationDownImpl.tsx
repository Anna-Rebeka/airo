import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";

interface Props {
    displayCarousel: any;
    setDisplayCarousel: any;
}

let NavigationImplNav = styled.nav`
    background-color: black;
    box-shadow: 2px 3px 8px 1px black;
    z-index: 9999;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;

    button:nth-of-type(2n) {
        margin-left: 0.3em;
    }
`;

let NavDownBtn = styled.button`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: transparent;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    margin-top: 0.3em;
`;

let NavDownImg = styled.img`
    width: 36px;
    height: auto;
`;

let NavDownParagraph = styled.div`
    margin: 0.4em 0;
`;

export const NavigationDownImpl: FunctionComponent<Props> = ({displayCarousel, setDisplayCarousel}) => {

    let chooseDisplay = (isFlightBtn: boolean) => {
        if(isFlightBtn && displayCarousel === "RIGHT"){
            setDisplayCarousel("LEFT");
        }
        if(!isFlightBtn && displayCarousel === "LEFT"){
            setDisplayCarousel("RIGHT");
        }
    }

    return (
        <NavigationImplNav>
            <NavDownBtn>
                <NavDownImg onClick={() => chooseDisplay(true)} src={require("../../../../public/images/flightrip.svg").default}/>
                <NavDownParagraph>Flight trip</NavDownParagraph>
            </NavDownBtn>
            <NavDownBtn>
                <NavDownImg onClick={() => chooseDisplay(false)} src={require("../../../../public/images/roundtrip.svg").default}/>
                <NavDownParagraph>Round trip</NavDownParagraph>
            </NavDownBtn>
        </NavigationImplNav>
    );
}
