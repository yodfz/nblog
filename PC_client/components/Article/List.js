import React, {Component,PropTypes} from 'react';
import styles from './Article.less';
import ListItem from './ListItem';

export default class List  extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor () {
        super()
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {
        return true;
    }
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (<div className={styles.List}>
            <ListItem className="selected"/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>);
    }
}