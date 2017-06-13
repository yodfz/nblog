import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import articleStyles from '../Article/Detail.less';
import utils from '../../../core/utils';

import ShowTime from '../../../components/Time/showTime';

export default class PhotoIndex extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor () {
        super();
        this.state={
            showSetting:false
        }
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    shouldComponentUpdate () {
        return true;
    }
    componentWillReceiveProps (nextProps) {

    }
    componentWillUpdate () {
    }

    componentDidUpdate () {
    }

    componentWillUnmount () {
    }

    handleSetting () {
        this.setState({showSetting: !this.state.showSetting});
    }

    render () {
        let model = {};
        let showSettingView;
        if (this.state.showSetting) {
            let $dateTime = new Date();
            console.log('load');
            showSettingView =
                <div className={articleStyles.setting} onClick={this.handleSetting.bind(this)}>
                    <div className="show" onClick={e=> {
                        e.stopPropagation()
                    }}>
                        <ShowTime date={$dateTime}/>

                        <ul>
                            <li>
                                图片上传
                            </li>
                            <li>
                                <div className="uploadImage">
                                    +
                                </div>
                            </li>
                            <li>标题</li>
                            <li>
                                <input type="text"
                                       id="title" value={model.title || ''}
                                />
                            </li>
                            <li>描述信息</li>
                            <li></li>
                            <li>
                                <button className="btn submit w100">
                                    添加图片
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>;
        }
        return (
            <div className={styles.index}>
                <div className="nav">
                    <button className="btn submit" onClick={e=> {
                        this.setState({showSetting:!this.state.showSetting});
                        console.log(this,this.state.showSetting);
                    }}>+ 上传相片
                    </button>

                </div>
                <div className="photo">
                    <div className="thumbnail" style={{'backgroundImage': 'url(/static/demo/yys.jpg)'}}>

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
                {showSettingView}
            </div>
        );
    }
}