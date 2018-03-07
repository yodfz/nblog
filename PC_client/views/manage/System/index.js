import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import EditPassword from './editPassword';
import DbBak from './DbBak';

export default class SystemIndex extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor(props) {
        super(props);
        this.match = props.match;
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
        console.log('system index', this.match.url)
        return (
            <Router>
                <div className={styles.index}>
                    <div className="nav">
                        <Link to="/manage/system/EditPassword">
                            <div
                                className={['/manage/system/EditPassword', '/manage/system'].indexOf(this.match.url) > -1 ? ('menu menu_active') : ''}>
                                修改密码
                            </div>
                        </Link>
                        <Link to="/manage/system/link">
                            <div className="menu">友情链接</div>
                        </Link>
                        <Link to="/manage/system/DbBak">
                            <div className="menu">数据库备份</div>
                        </Link>
                    </div>
                    <Switch>
                        <Route exact path={`${this.match.url}/EditPassword`} component={EditPassword}/>
                        <Route exact path={`${this.match.url}/DbBak`} component={DbBak}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}