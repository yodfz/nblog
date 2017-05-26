import React, {Component,PropTypes} from 'react';
import styles from './NoMatchImg.less';

export default class NoMatchImg extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor () {
        super()
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {return true;}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (<div className={styles.NoMatchImg}>
            <img src="/static/images/noselectArticle.png" alt=""/>
        </div>);
    }
}