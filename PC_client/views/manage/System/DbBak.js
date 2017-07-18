import React, {Component,PropTypes} from 'react';
import styles from './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {updatePassword} from '../../../store/actions/System';

@connect(
    state=> {
        return {state: state.DbBak}
    },
    dispatch=>bindActionCreators({

    }, dispatch)
)
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
                <div className="menu">修改密码</div>
                <div className="menu select">数据库备份</div>
            </div>
            <div className="DbBakIndex">
                <p>
                    最后备份时间:  (KB)
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