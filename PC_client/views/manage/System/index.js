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

    constructor (props) {
        super(props);
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    shouldComponentUpdate () {
        return true;
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    render () {
        return (
            <Router>
                <div className={styles.index}>
                    <div className="nav">
                        <Link to="">
                            <div className="menu">修改密码</div>
                        </Link>
                        <Link to="">
                            <div className="menu">友情链接</div>
                        </Link>
                        <Link to="">
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