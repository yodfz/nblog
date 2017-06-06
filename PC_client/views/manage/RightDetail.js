import React, {Component,PropTypes} from 'react';
import styles from './RightDetail.less';

export default class RightDetail  extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor (props) {
        super(props);
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
            <div className={"fl vh100 " + styles.RightDetail}>
                {this.props.children}
            </div>
        );
    }
}