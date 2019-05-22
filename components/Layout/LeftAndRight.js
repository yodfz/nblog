import react from 'react'
import './LeftAndRight.less'
export default class Index extends react.PureComponent {
    render () {
        console.log('layout leftandright render')
        return (
        <div className="content flex-x">
            <div className="left">
                {this.props.left}
            </div>
            <div className="right">
                {this.props.right}
            </div>
        </div>)
    }
}