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
import watchSagas, {sagas} from './store/sagas';

import styles from './index.less';

import Main from './views/manage/Main';
import NoMatch from './views/manage/NoMatch';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(appStore, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(watchSagas.watchGetArticleList);
let run = function () {
    try {
        sagaMiddleware.run(sagas);
    } catch (err) {
        run();
    }
};
run();

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