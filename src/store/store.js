import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();

const logger = createLogger({
    collapsed: true,
});

export default function configureStore(initialState = {}) {
    //const middleware = [thunk, logger];

    const store = createStore(
        rootReducer(history),
        initialState,
        compose(applyMiddleware(logger))
    );

    return store;
}