import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './LeftMenu.less';

import {selectMenu} from '../../store/actions/Menu.js';

import MenuItem from '../../components/Menu/MenuItem';

import $config from '../../config';


@connect(
    state=> {
        return {state:state.Menu}
    },
    dispatch=>bindActionCreators({selectMenu}, dispatch)
)
export default class LeftMenu extends Component {
    static defaultProps = {
        items: $config.leftMenu
    };
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
        let checkUrl = (path) => {
            return path == window.location.pathname;
        };
        var children = this.props.items.map(item=> {
            return (
                <MenuItem
                    select={this.props.selectMenu}
                    index={this.props.state.index}
                    key={item.idx}
                    className={checkUrl(item.url) ? 'selected' : ''}
                    {...item} />
            );
        });

        return (
            <div className={"fl vh100 " + styles.leftMenu}>
                <div className={styles.logo}>
                    NBlog 1.0.0
                </div>
                <ul className={styles.ul}>
                    {children}
                </ul>
            </div>
        );
    }
}