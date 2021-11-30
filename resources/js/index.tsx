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

let MainWrapper = styled.div`
    max-width: 1920px;
`;


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
