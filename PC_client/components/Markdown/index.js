import React, {Component, PropTypes} from 'react';
import styles from './index.less';
export default class Markdown extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
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
        return (<div className={styles.index}>

            <div className="editor" contentEditable="true">
                {this.props.content}
            </div>
        </div>);
    }
}