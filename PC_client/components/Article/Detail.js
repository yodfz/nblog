import React, {Component, PropTypes} from 'react';
import {Icon} from '../UI';
console.log(Icon);
export default class Detail extends Component {
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
        return (<div className="ArticleDetail">
            <input type="text" className="title"/>
            <Icon name="info"/>
        </div>);
    }
}