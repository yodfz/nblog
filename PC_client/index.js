import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import styles from './index.less';

// let store = createStore(todoApp)

import ManageMain from './views/manage/Main';
// import HelloWorld from './components/HelloWorld';
render(
    <ManageMain/>
    , document.querySelector('#app'));