import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history';
import {
    UserReducer,
} from 'reducers';
import { rootSaga } from 'sagas';
import { IUsersState } from 'models/UserModel';
import { connectRouter, routerMiddleware } from 'connected-react-router';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

export interface IState {
    users: IUsersState,
    router: any
}

const store = createStore(
    combineReducers({
        users: UserReducer,
        router: connectRouter(history),
    }),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        ),
    )
);

sagaMiddleware.run(rootSaga);

export default store;
