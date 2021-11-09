import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import React from 'react';
import {NavigationImpl} from "./components/navigation/NavigationImpl";

const store = createStore(() => {});


function Root() {
    return (
        <Provider store={store}>
           <NavigationImpl logo={null}/>
        </Provider>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
