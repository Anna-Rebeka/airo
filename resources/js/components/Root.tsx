import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {NavigationCore} from "./navigation/NavigationCore";

const store = createStore(() => {});


function Root() {
    return (
        <Provider store={store}>
           <NavigationCore backgroundColor={"black"}/>
        </Provider>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
