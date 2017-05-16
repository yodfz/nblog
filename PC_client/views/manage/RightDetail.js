import React, {Component,PropTypes} from 'react';
import styles from './RightDetail.less';

export default class RightDetail  extends Component {
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
        return (
            <div className={"fl vh100 " + styles.RightDetail}>RightDetail</div>
        );
    }
}