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
                          images={[{url: require("../../public/images/carousel0.jpg")}, {url: require("../../public/images/carousel1.jpg")}, {url: require("../../public/images/carousel2.jpg")}]}/>
            <FooterImpl textLinks={[{href: "/", text: "Home"}, {href: "/", text: "ONE"}, {href: "/", text: "TWO"},
                {href: "/", text: "THREE"}]}
                        iconLinks={null}/>
        </Provider>

    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root/>, document.getElementById('root'));
}
