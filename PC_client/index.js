import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import styles from './index.less';
import appStore from './store';
let store = createStore(appStore);

import ManageMain from './views/manage/Main';
// import HelloWorld from './components/HelloWorld';
render(
    <Provider store={store}>
        <ManageMain/>
    </Provider>
    , document.querySelector('#app'));