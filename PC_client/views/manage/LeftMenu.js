import React, {Component,PropTypes} from 'react';
import styles from './LeftMenu.less';
console.log(styles);
export default class LeftMenu  extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor () {
        super()
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (
            <div className={"fl vh100 " + styles.leftMenu}>

                LeftMenu</div>
        );
    }
}