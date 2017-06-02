import React, {Component, PropTypes} from 'react';

import MiddleArticleList from './MiddleArticleList';

import RightDetail from '../RightDetail';
import NoMatchImg from '../NoMatchImg';
import Detail from './Detail';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectArticle} from '../../../store/actions/Article.js';

import styles from './Main.less';

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
        console.log('this.props.state.select',this.props.state.select);
        let children = (() => {
            if (this.props.state.selectIdx!=-1) {
                return <Detail data={this.props.state.select}/>;
            } else {
                return <NoMatchImg/>;
            }
        })();
        return (<div className={styles.Main}>
            <MiddleArticleList/>
            <RightDetail>
                {children}
            </RightDetail>
        </div>);
    }
}