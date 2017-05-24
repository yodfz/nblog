import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import createSagaMiddleware from 'redux-saga';

// import Routes from './routers';
import appStore from './store';

import styles from './index.less';

import Main from './views/manage/Main';

let store = createStore(appStore);

render(
    <Provider store={store}>
        {/*<Main/>*/}
        {/*<Route component={NoMatch}/>*/}
    </Provider>
    , document.querySelector('#app'));