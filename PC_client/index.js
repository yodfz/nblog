import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';

// import Routes from './routers';
import appStore from './store';

import styles from './index.less';

import Main from './views/manage/Main';

let store = createStore(appStore);

render(
    <Provider store={store}>
        <Router>
            <Route path="/manage" component={Main}/>
        </Router>
        {/*<Route path="/manage" component={Main}/>*/}
        {/*<Main/>*/}
        {/*<Route component={NoMatch}/>*/}
    </Provider>
    , document.querySelector('#app'));