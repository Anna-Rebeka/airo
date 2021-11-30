import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React, {FunctionComponent} from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {CarouselImpl} from "./components/carousel/CarouselImpl";
import {FooterImpl} from "./components/footer/FooterImpl";
import styled from "@emotion/styled";
import {CarouselImageHalf} from "./components/image/CarouselImageHalf";

const store = createStore(() => {
});

interface SearchFlightsProps {
    dataset: any;
}


const SearchFlights: FunctionComponent<SearchFlightsProps> = ({dataset}) => {
    return (
        <Provider store={store}>
            <NavigationImpl logo={null} user={dataset && JSON.parse(dataset.user)}/>

            <FooterImpl iconLinks={null}/>
        </Provider>

    );
}

export default SearchFlights;

const element = document.getElementById('search_flights');
if (element) {
    ReactDOM.render(<SearchFlights dataset={Object.assign({}, element.dataset)}/>, element);
}
