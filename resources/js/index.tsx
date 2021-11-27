import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {CarouselImpl} from "./components/carousel/CarouselImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {CarouselImageHalf} from "./components/image/CarouselImageHalf";
import AutoCompleteInput from "./components/input/auto-complete/AutoCompleteInput";

const store = createStore(() => {
});

interface RootProps {
    dataset: any;
}

let Carousel = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 93vh;
`

let InputWrapper = styled.div`
    display: flex;
    background-color: rgba(0,0,0,0.4);
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
    return (
        <Provider store={store}>
            <NavigationImpl logo={null} user={dataset && JSON.parse(dataset.user)}/>
            <Carousel>
                <CarouselImageHalf side={"LEFT"} src={{url: require("../../public/images/first.jpg")}} alt={"first"}/>
                {/*<CarouselImageHalf side={"RIGHT"} src={{url: require("../../public/images/second.jpg")}}
                                   alt={"second"}/>*/}
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
