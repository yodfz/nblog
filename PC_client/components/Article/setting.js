import React, {Component, PropTypes} from 'react';
import styles from './Article.less';

export default class setting extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor () {
        super()
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
        return (
            <div className={styles.setting} onClick={this.props.onClick}>

            </div>);
    }
}