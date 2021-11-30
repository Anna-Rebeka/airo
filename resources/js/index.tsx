import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent, useState} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {CarouselImageImpl} from "./components/carousel/CarouselmgImpl";

const store = createStore(() => {
});

interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    width: 100%;
    height: 100vh;
`

let InputWrapper = styled.div`
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    padding-bottom: 3em;
    box-shadow: 2px 3px 8px 1px rgba(0, 0, 0, 1);
`;

let TitleInput = styled.p`
    color: white;
    font-size: 2em;
    font-weight: bold;
    text-shadow: 0 5px 8px black;
`

const Root: FunctionComponent<RootProps> = ({dataset}) => {
    let [displayCarousel, setDisplayCarousel] = useState("LEFT");

    return (
        <Provider store={store}>
            <NavigationImpl logo={null} user={dataset && JSON.parse(dataset.user)}/>
            <Carousel>
                <CarouselImageImpl displayCarousel={"RIGHT" === displayCarousel}
                                   setDisplayedSide={setDisplayCarousel}
                                   side={"RIGHT"} imgSource={require("../../public/images/carousel_round_trip.jpg")}/>
                <CarouselImageImpl displayCarousel={"LEFT" === displayCarousel}
                                   setDisplayedSide={setDisplayCarousel}
                                   side={"LEFT"} imgSource={require("../../public/images/carousel_plane.jpg")}/>

                {/*<InputWrapper>
                    <TitleInput>
                        From
                    </TitleInput>
                    <AutoCompleteInput/>
                    <TitleInput>
                        To
                    </TitleInput>
                    <AutoCompleteInput/>
                    <TitleInput>
                        Date
                    </TitleInput>
                    <AutoCompleteInput/>
                </InputWrapper>*/}
            </Carousel>
            <FooterImpl iconLinks={null}/>
        </Provider>

    );
}

export default Root;

const element = document.getElementById('root');
if (element) {
    ReactDOM.render(<Root dataset={Object.assign({}, element.dataset)}/>, element);
}
