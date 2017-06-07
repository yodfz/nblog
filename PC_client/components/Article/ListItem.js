import React, {Component, PropTypes} from 'react';
import styles from './Article.less';

export default class ListItem extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
        this.model = props.data;
        this.select = props.select;
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
        const formatDate = (str) => {
            let $date = new Date(str);
            return $date.getFullYear() + '-' + ($date.getMonth() + 1) + '-' + $date.getDate();
        };
        return (<div onClick={this.select.bind(this, this.model.idx)}
                     className={styles.ListItem + ' ' + (this.props.className || '')}>
            <h3>{this.model.title}</h3>
            <p className="description">{this.model.description}</p>
            <span className="description">{this.model.tag&&this.model.tag.split(' ').map(p=> {
                return '#' + p + ' ';
            })}</span>
            <span className="description par">{formatDate(this.model.createdAt)}</span>
        </div>);
    }
}