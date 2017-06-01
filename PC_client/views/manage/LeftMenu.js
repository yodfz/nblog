import React, {Component, PropTypes} from 'react';
import Menu from '../../components/Menu/Menu.js';

import styles from './LeftMenu.less';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectMenu} from '../../store/actions/Menu.js';

@connect(
    state=> {
        return {state:state.Menu}
    },
    dispatch=>bindActionCreators({selectMenu}, dispatch)
)
export default class LeftMenu extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super();
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    // shouldComponentUpdate () {
    //     return true;
    // }

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
                <Menu select={this.props.selectMenu} index={this.props.state.index}/>
            </div>
        );
    }
}