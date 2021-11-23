import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";
import {CarouselImpl} from "./components/carousel/CarouselImpl";
import {FooterImpl} from "./components/footer/FooterImpl";

const store = createStore(() => {
});


function Root() {
    return (
        <Provider store={store}>
            <NavigationImpl logo={null}/>
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
    ReactDOM.render(<Root/>, element);
    const props = Object.assign({}, element.dataset)
    console.log(props);
}
