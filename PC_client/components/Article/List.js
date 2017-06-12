import React, {Component, PropTypes} from 'react';
import styles from './Article.less';
import ListItem from './ListItem';
import {Icon} from '../../components/UI';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectArticle, getArticle} from '../../store/actions/Article';
import {STATE} from '../../store/actionsType';
@connect(
    state=> {
        return {state: state.Article}
    },
    dispatch=>bindActionCreators({selectArticle, getArticle}, dispatch)
)
export default class List extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    componentWillReceiveProps (nextProps) {
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

    handleLoadMore () {
        this.props.getArticle(this.props.state.pageIndex + 1, this.props.searchkey ? this.props.searchkey : '');
    }


    render () {
        let loadingEl = (()=> {
            if (this.props.state.status == STATE.FETCHING) {
                return <div className="loadMore">
                    <Icon name="loading1"/>
                    &nbsp;&nbsp;正在获取文章
                </div>
            }
        })();
        let loadingButton;
        if (this.props.state.status != STATE.FETCHING) {
            loadingButton = <button
                className="loadMoreButton"
                onClick={this.handleLoadMore.bind(this)}>加载更多文章</button>;
        }
        return (<div className={styles.List} id={this.props.id}>
            {this.props.state.data.map(item=> {
                return <ListItem data={item} className={this.props.state.selectIdx == item.idx ? 'selected' : ''}
                                 select={this.props.selectArticle} key={item.idx}/>;
            })}
            {/*<ListItem className="selected"/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {loadingEl}
            {loadingButton}
        </div>);
    }
}