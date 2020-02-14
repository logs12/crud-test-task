import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom';
import UsersPage from 'pages/UserPages';
import ViewUserPage from 'pages/UserPages/ViewUserPage';
import CreateUserPage from 'pages/UserPages/CreateUserPage';
import EditUserPage from 'pages/UserPages/EditUserPage';
import Routes from 'routes';
import store, { history } from 'store';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact { ...Routes.ROOT } component={UsersPage} />
                    <Route { ...Routes.USER_VIEW } component={ViewUserPage} />
                    <Route { ...Routes.USER_CREATE } component={CreateUserPage} />
                    <Route { ...Routes.USER_EDIT } component={EditUserPage} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
};

export default App;