import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDbInfo, getBak_DbBak} from '../../../store/actions/System';

@connect(
    state => {
        return {state: state.System}
    },
    dispatch => bindActionCreators({getDbInfo, getBak_DbBak}, dispatch)
)
export default class DbBak extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props)
        this.props.getDbInfo()
    };

    componentWillMount() {
    }

    componentDidMount() {
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        console.log(this.props.state)
        return (<div className={[styles.index, styles.DbBak]}>
            <div className="DbBakIndex">
                <p>
                    当前状态:{(this.props.state.DbBak.now.size/1024).toFixed(2)} (KB)/{(this.props.state.DbBak.now.lastDate).split('T')[0]}
                </p>
                <p>
                    最后备份:{this.props.state.DbBak.bak.size||0} (KB)/{this.props.state.DbBak.bak.lastDate||'无'}
                </p>
                <p>

                </p>
                <p>
                    <button className="btn submit"
                            onClick={this::this.props.getBak_DbBak}
                    >
                        备份数据库
                    </button>
                </p>
            </div>
        </div>);
    }
}