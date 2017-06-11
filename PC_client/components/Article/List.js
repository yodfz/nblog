import React, {Component, PropTypes} from 'react';
import styles from './Article.less';
import ListItem from './ListItem';

export default class List extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props)
        console.log('list', props);
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    componentWillReceiveProps (nextProps) {
        console.log('article list componentWillReceiveProps');
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
        console.log(this.props.data);
        return (<div className={styles.List} id={this.props.id}>
            {this.props.data.map(item=> {
                return <ListItem data={item} className={this.props.selectIdx==item.idx?'selected':''} select={this.props.select} key={item.idx}/>;
            })}
            {/*<ListItem className="selected"/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
            {/*<ListItem/>*/}
        </div>);
    }
}