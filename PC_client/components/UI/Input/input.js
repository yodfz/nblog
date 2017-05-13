import React, {Component} from 'react';
import styles from './index.less';

export default class Input extends Component {
    constructor () {
        super();
    };

    componentDidUpdate () {
        if (this.props.autoFocus) {
            this.refs.input.focus();
        }
    }

    render () {
        let props = this.props;
        let className = styles.inputDefault + ' ' + (props.className || '');

        return (
            <input type="text" ref="input"  {...props} className={className}/>
        );
    }
}