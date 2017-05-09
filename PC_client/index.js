import React from 'react';
import {render} from 'react-dom';
import styles from './index.less';

import ManageMain from './views/manage/Main';
// import HelloWorld from './components/HelloWorld';
render(
    <ManageMain/>
    , document.querySelector('#app'));