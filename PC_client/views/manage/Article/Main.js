import React, {Component, PropTypes} from 'react';

import MiddleArticleList from './MiddleArticleList';

import RightDetail from '../RightDetail';
import noSelect from '../../../components/Article/noSelect';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectArticle} from '../../../store/actions/Article.js';

@connect(
    state=> {
        return {state: state.Article}
    },
    dispatch=>bindActionCreators({selectArticle}, dispatch)
)
export default class ArticleMain extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    shouldComponentUpdate () {
        return true;
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    render () {
        let children = ()=> {
            if (this.props.state.select.id) {
                return <div></div>;
            } else {
                return <noSelect/>;
            }
        };
        return (<div>
            <MiddleArticleList select={this.props.selectArticle}/>
            <RightDetail>
                {children}
            </RightDetail>
        </div>);
    }
}