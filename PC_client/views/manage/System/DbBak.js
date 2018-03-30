import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDbInfo, getBAK_DBBAK} from '../../../store/actions/System';

@connect(
    state => {
        return {state: state.DbBak}
    },
    dispatch => bindActionCreators({getDbInfo, getBAK_DBBAK}, dispatch)
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
        return (<div className={[styles.index, styles.DbBak]}>
            <div className="DbBakIndex">
                <p>
                    最后备份:{this.props.state.size} (KB)/{this.props.state.lastDate}
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