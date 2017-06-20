import React, {Component, PropTypes} from 'react';

import {Input, Icon} from '../../../components/UI';
import ArticleList from '../../../components/Article/List';

import styles from './MiddleArticleList.less';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {STATE} from '../../../store/actionsType';
import {getArticle, selectArticle, addArticle} from '../../../store/actions/Article';

@connect(
    state=> {
        return {state: state.Article}
    },
    dispatch=>bindActionCreators({getArticle, selectArticle, addArticle}, dispatch)
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
        // replace hight text
        const key = this.searchKey;
        let items = document.querySelectorAll('#articleList h3');
        if (items && key) {
            Array.prototype.map.call(items, p=> {
                p.innerHTML = p.innerHTML.replace(key, '<span class="heightText">' + key + '</span>');
            })
        }
    }

    componentWillUnmount () {
    }

    handleSearchTextOnFocus () {
        this.setState({
            isFocus: true
        });
    }

    handleSearchTextOnBlur () {
        if (this.state.searchTextInput) {

        } else {
            this.setState({
                isFocus: false
            });
        }

    }

    handleKeyDown (event) {
        if (event.keyCode == 13) {
            this.searchKey = event.target.value;
            this.props.getArticle(1, event.target.value);
        }
    }

    handleAddArticle () {
        this.props.addArticle();
        this.props.selectArticle(0);
    }

    handleChange (event) {
        let id = event.target.id;
        this.setState({[id]: event.target.value});
    }

    render () {
        // if (this.props.state.data.length == 0) {
        //     this.props.getArticle();
        // }
        // let loading = (() => {
        //     if (this.state.status) {
        //         return <div className='loading'>
        //             <Icon name="loading1"/>
        //             &nbsp;&nbsp;正在获取文章中...
        //         </div>;
        //     }
        //     return null;
        // })();
        return (
            <div className={"fl vh100 " + styles.MiddleArticleList}>
                <div className={styles.top}>
                    <div className="inputBorder">
                        <div className={"ShowSearchText fs12 " + (this.state.isFocus ? 'focused' : '')}>
                            <Input id="searchTextInput" className="searchTextInput"
                                   onChange={this.handleChange.bind(this)}
                                   onFocus={this.handleSearchTextOnFocus.bind(this)}
                                   onBlur={this.handleSearchTextOnBlur.bind(this)}
                                   onKeyDown={this.handleKeyDown.bind(this)}
                                   placeholder="搜索文章"/>
                            <Icon name="search" className="fs40"/>
                            {/*<span>搜索文章</span>*/}
                        </div>
                        <button className="btnRight" onClick={this.handleAddArticle.bind(this)}>
                            <Icon name="fankui1" className="fs24"/>
                        </button>
                    </div>
                </div>
                {/*{this.props.state.status}*/}
                {/*{loading}*/}
                <ArticleList id="articleList"
                    searchkey={this.searchKey}
                />
            </div>
        );
    }
}