import React, {Component, PropTypes} from 'react';
import MenuItem from './MenuItem';

import styles from './Menu.less';

export default class Menu extends Component {
    static defaultProps = {
        items: [
            {
                idx: 1,
                icon: 'article',
                text: '文章',
                url: '',
                active: true
            },
            {
                idx: 2,
                icon: 'groupcopy5',
                text: '评论',
                url: '',
                active: false
            },
            {
                idx: 3,
                icon: 'setting',
                text: '系统',
                url: '',
                active: false
            }
        ]
    };
    static propTypes = {};

    constructor (props) {
        super(props);
        console.log('menu', props)
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    // shouldComponentUpdate () {
    // }

    componentWillUpdate () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    render () {
        console.log(this.props.index);
        var children = this.props.items.map(item=> {
            return <MenuItem
                select={this.props.select.bind(this, item.idx)}
                className={item.idx == this.props.index ? 'selected' : ''}
                {...item}
                key={item.idx}/>;
        });
        return (
            <ul className={styles.ul}>
                {children}
            </ul>);
    }
}