import React, {Component,PropTypes} from 'react';
import styles from './index.less';

export default class PhotoIndex extends Component {
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
        return (
            <div className={styles.index}>
                <div className="nav">
                    <button className="btn submit" >+ 上传相片</button>

                </div>
                <div className="photo">
                    <div className="thumbnail" style={{'background-image':'url(/static/demo/yys.jpg)'}}>

                    </div>
                    <p className="title">九寨沟水</p>
                    <p className="info">
                        拍摄机型:Nicon D7100 1/50 2.2光圈
                    </p>
                    <p>
                        <a href="">编辑</a>&nbsp;|&nbsp;
                        <a href="" className="delete">删除</a>
                    </p>
                </div>
            </div>
        );
    }
}