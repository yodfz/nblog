import React, {Component, PropTypes} from 'react';
import MenuItem from './MenuItem';
import {
    Link
} from 'react-router-dom';
import styles from './Menu.less';

export default class Menu extends Component {
    static defaultProps = {
        items: [
            {
                idx: 1,
                icon: 'article',
                text: '文章',
                url: '/manage/article',
                active: true
            },
            {
                idx: 2,
                icon: 'groupcopy5',
                text: '评论',
                url: '/manage/comment',
                active: false
            },
            {
                idx: 3,
                icon: 'setting',
                text: '系统',
                url: '/manage/system',
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
        var children = this.props.items.map(item=> {
            return <Link to={item.url} key={item.idx}><MenuItem
                select={this.props.select.bind(this, item.idx)}
                className={item.idx == this.props.index ? 'selected' : ''}
                {...item}
                /></Link>;
        });
        return (
            <ul className={styles.ul}>
                {children}
            </ul>);
    }
}