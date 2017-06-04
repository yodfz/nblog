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

    constructor (props) {
        super(props);
        this.state = {
            isFocus: false
        };
        if (this.props.state.data.length == 0) {
            this.props.getArticle();
        }
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

    handleSearchTextOnFocus () {
        this.setState({
            isFocus: true
        });
    }

    handleSearchTextOnBlur () {
        this.setState({
            isFocus: false
        });
    }

    render () {
        // if (this.props.state.data.length == 0) {
        //     this.props.getArticle();
        // }
        return (
            <div className={"fl vh100 " + styles.MiddleArticleList}>
                <div className={styles.top}>
                    <div className="input">
                        <div className={"ShowSearchText fs12 " + (this.state.isFocus ? 'focused' : '')}>
                            <Input id="searchTextInput" className="searchTextInput"
                                   onFocus={this.handleSearchTextOnFocus.bind(this)}
                                   onBlur={this.handleSearchTextOnBlur.bind(this)}
                                   placeholder="搜索文章" />
                            <Icon name="search" className="fs40"/>
                            {/*<span>搜索文章</span>*/}
                        </div>
                        <button className="btnRight">
                            <Icon name="fankui1" className="fs24"/>
                        </button>
                    </div>
                </div>
                {this.props.state.state}
                <ArticleList data={this.props.state.data} selectIdx={this.props.state.selectIdx} select={this.props.selectArticle}/>
            </div>
        );
    }
}