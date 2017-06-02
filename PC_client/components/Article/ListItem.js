import React, {Component, PropTypes} from 'react';
import styles from './Article.less';

export default class ListItem extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
        this.model = props.data;
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
        return (<div className={styles.ListItem + ' ' + (this.props.className || '')}>
            <h3>{this.model.title}</h3>
            <p className="description">{this.model.description}</p>
            <span className="description">{this.model.tag}</span>
            <span className="description par">{this.model.createdAt}</span>
        </div>);
    }
}