import React, {Component, PropTyps} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import LeftMenu from './LeftMenu';

import ArticleMain from './Article/Main';
import NoMatchImg from './NoMatchImg';


export default class Main extends Component {
    constructor ({match}) {
        super();
        this.match = match;
    }

    render () {
        return (
            <Router>
                <div className="vh100 main">
                    <LeftMenu/>
                    <Switch>
                        <Route exact path={`${this.match.url}/article`} component={ArticleMain}/>
                        <Route component={NoMatchImg}/>
                    </Switch>
                    {/*{this.props.children}*/}
                    {/*<MiddleArticleList/>*/}
                    {/*<RightDetail></RightDetail>*/}
                </div>
            </Router>
        );
    }
};