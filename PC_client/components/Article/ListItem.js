import React, {Component,PropTypes} from 'react';

export default class ListItem extends Component {
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
        return (<div>
            <h3>Title</h3>
            <p>这个是描述文字</p>
            <span>2017-01-01</span>
            <span>#javascript #test</span>
        </div>);
    }
}