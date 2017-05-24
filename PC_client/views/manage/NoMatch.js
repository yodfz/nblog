import React, {Component,PropTypes} from 'react';

export default class NoMatch extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor () {
        super()
    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {return true;}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        return (<div>无匹配路由</div>);
    }
}