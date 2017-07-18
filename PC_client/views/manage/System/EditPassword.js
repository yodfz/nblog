import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updatePassword} from '../../../store/actions/System';
import handle from '../../../core/handle';

@connect(
    state=> {
        return {state: state.System}
    },
    dispatch=>bindActionCreators({
        updatePassword
    }, dispatch)
)
export default class EditPassword extends Component {
    static defaultProps = {
    };
    static propTypes = {
    };
    constructor (props) {
        super(props);
        this.state = {updatePassword: {}};

    };
    componentWillMount () {}
    componentDidMount  () {}
    shouldComponentUpdate () {return true;}
    componentWillUpdate () {}
    componentDidUpdate () {}
    componentWillUnmount () {}

    render () {
        let model = this.state.updatePassword;

        return (
            <div id="updatePassword">
                <ul>
                    <li>
                        <input type="password" required className="input" id="updatePassword.oldPassword"
                               value={model.oldPassword}
                               onChange={this::handle.handleOnChange}/>
                        <span className="label">
                                原始密码
                            </span>
                    </li>
                    <li>
                        <input type="password" required className="input" id="updatePassword.newPassword1"
                               value={model.newPassword1}
                               onChange={this::handle.handleOnChange}
                        />
                        <span className="label">
                                新密码
                            </span>
                    </li>
                    <li>
                        <input type="password" required className="input" id="updatePassword.newPassword2"
                               value={model.newPassword2}
                               onChange={this::handle.handleOnChange}
                        />
                        <span className="label">
                                重复新密码
                            </span>
                    </li>
                    <li>
                        <button className="btn submit" onClick={e=> {
                            this.props.updatePassword(this.state.updatePassword);
                        }}>
                            确定修改密码
                        </button>
                    </li>
                    <li>
                        {this.props.state.updatePasswordStatus}
                    </li>
                </ul>
            </div>
        );
    }
}