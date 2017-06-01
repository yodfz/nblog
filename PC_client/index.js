import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';

// import Routes from './routers';
import appStore from './store';
import watchSagas from './store/sagas';

import styles from './index.less';

import Main from './views/manage/Main';
import NoMatch from './views/manage/NoMatch';

let store = createStore(appStore, applyMiddleware(createSagaMiddleware(...watchSagas)));

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/manage" component={Main}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
        {/*<Route path="/manage" component={Main}/>*/}
        {/*<Main/>*/}
        {/*<Route component={NoMatch}/>*/}
    </Provider>
    , document.querySelector('#app'));