import React, {Component, PropTyps} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import LeftMenu from './LeftMenu';

import ArticleMain from './Article/Main';


export default class Main extends Component {
    render () {
        return (
            <div className="vh100 main">
                <LeftMenu/>
                {/*<Route exact path="/article" component={ArticleMain}/>*/}
                {/*{this.props.children}*/}
                {/*<MiddleArticleList/>*/}
                {/*<RightDetail></RightDetail>*/}
            </div>
        );
    }
};