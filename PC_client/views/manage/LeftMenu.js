import React, {Component, PropTypes} from 'react';
import Menu from '../../components/Menu/Menu.js';

import styles from './LeftMenu.less';
export default class LeftMenu extends Component {
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
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <div className={"fl vh100 " + styles.leftMenu}>
                <div className={styles.logo}>
                    NBlog 1.0.0
                </div>
                <Menu/>
            </div>
        );
    }
}