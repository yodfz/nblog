import React, {Component, PropTyps} from 'react';
import LeftMenu from './LeftMenu';
import MiddleArticleList from './MiddleArticleList';
import RightDetail from './RightDetail';
import ArticleDetail from './Article/Detail';

export default class Main extends Component {
    render () {
        return (
            <div className="vh100 main">
                <LeftMenu/>
                {this.props.children}
                <MiddleArticleList/>
                <RightDetail></RightDetail>
            </div>
        );
    }
};