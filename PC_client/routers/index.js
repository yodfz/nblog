import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {Switch} from 'react-router';
// UI COMPONENTS
import Main from '../views/manage/Main';
import NoMatch from '../views/manage/NoMatch';

// UI COMPONENT ARTICLE
import ArticleMain from '../views/manage/Article/Main';

export default ({history})=>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <div className="vh100 main">
            <Route path="/" component={Main}>
                {/*<Route exact path="/article" component={ArticleMain}/>*/}
                {/*<IndexRoute component={Dashboard} />*/}
            </Route>
            <Route component={NoMatch}/>
        </div>
    </Router>;