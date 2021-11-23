import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {CarouselImpl} from "./components/carousel/CarouselImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {ImageComponent} from "./components/image/Image";

const store = createStore(() => {
});

interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 93vh;
`

const Root: FunctionComponent<RootProps> = ({dataset}) => {
    return (
        <Provider store={store}>
            <NavigationImpl logo={null} user={dataset && JSON.parse(dataset.user)}/>
            <Carousel>
                <ImageComponent src={{url: require("../../public/images/first.jpg")}} alt={"first"}/>
                <ImageComponent src={{url: require("../../public/images/second.jpg")}} alt={"second"}/>
            </Carousel>
            <CarouselImpl imageTickInterval={3500}
                          images={[{url: require("/images/carousel0.jpg")}, {url: require("/images/carousel1.jpg")}, {url: require("/images/carousel2.jpg")}]}/>
            <FooterImpl textLinks={[{href: "/", text: "Home"}, {href: "/", text: "ONE"}, {href: "/", text: "TWO"},
                {href: "/", text: "THREE"}]}
                        iconLinks={null}/>
        </Provider>

    );
}

export default Root;

const element = document.getElementById('root');
if (element) {
    ReactDOM.render(<Root dataset={Object.assign({}, element.dataset)}/>, element);
}
