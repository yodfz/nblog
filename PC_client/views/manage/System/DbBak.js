import React, {Component,PropTypes} from 'react';
import styles from './index.less';

export default class DbBak extends Component {
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
        return (<div className={[styles.index,styles.DbBak]}>
            <div className="nav">
                <div className="menu select">修改密码</div>
                <div className="menu">数据库备份</div>
            </div>
            <div className="DbBakIndex">
                <p>
                    最后备份时间:  (mb)
                </p>
                <p>

                </p>
                <p>
                    <button className="btn submit">
                        备份数据库
                    </button>
                </p>
            </div>
        </div>);
    }
}