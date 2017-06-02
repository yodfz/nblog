import React, {Component, PropTypes} from 'react';

import {Input, Icon} from '../../../components/UI';
import ArticleList from '../../../components/Article/List';

import styles from './MiddleArticleList.less';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getArticle,selectArticle} from '../../../store/actions/Article';

@connect(
    state=> {
        return {state: state.Article}
    },
    dispatch=>bindActionCreators({getArticle,selectArticle}, dispatch)
)
export default class MiddleArticleList extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor () {
        super();
        this.state = {
            isFocus: false
        };
    };

    componentWillMount () {

    }

    componentDidMount () {
        if (this.props.state.data.length == 0) {
            this.props.getArticle();
        }
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

    handleSearchTextOnClick () {
        console.log(this);
        this.setState({
            isFocus: true
        });
    }

    render () {
        return (
            <div className={"fl vh100 " + styles.MiddleArticleList}>
                <div className={styles.top}>
                    <div className="input">
                        <Input id="searchTextInput" className="searchTextInput" autoFocus={this.state.isFocus}/>
                        <div className="ShowSearchText fs12" onClick={this.handleSearchTextOnClick.bind(this)}>
                            <Icon name="search" className="fs40"/>
                            <span>搜索文章</span>
                        </div>
                        <button className="btnRight">
                            <Icon name="fankui1" className="fs24"/>
                        </button>
                    </div>
                </div>
                <ArticleList data={this.props.state.data} selectIdx={this.props.state.selectIdx} select={this.props.selectArticle}/>
            </div>
        );
    }
}