import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducers";


const configurableStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
};

export const store = configurableStore();
