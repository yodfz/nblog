import React, {Component, PropTypes} from 'react';
import styles from './Article.less';

export default class ListItem extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props)
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
        return (<div className={styles.ListItem + ' ' + (this.props.className||'')}>
            <h3>Title</h3>
            <p className="description">这个是描述文字</p>
            <span className="description">2017-01-01</span>
            <span className="description">#javascript #test</span>
        </div>);
    }
}