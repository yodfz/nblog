import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import appStore from './store';

import styles from './index.less';

let store = createStore(appStore);

import ManageMain from './views/manage/Main';
// import HelloWorld from './components/HelloWorld';
render(
    <Provider store={store}>
        <ManageMain/>
    </Provider>
    , document.querySelector('#app'));