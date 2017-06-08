import React, {Component, PropTypes} from 'react';
import styles from './Detail.less';
import MarkDown from '../../../components/Markdown';
import ArticleSetting from '../../../components/Article/setting';
import {Icon} from '../../../components/UI';
import {STATE} from '../../../store/actionsType';

export default class Detail extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super();
        this.state = {
            // // 标题
            // title: '',
            // // 描述
            // description: '',
            // // 正文内容
            // content: '',
            // // 标签
            // tag: '',
            // // 类别
            // category: '',
            showSetting: false
        };
    };

    componentWillMount () {
    }

    componentDidMount () {
    }

    shouldComponentUpdate () {
        // if(this.props.data.idx!=this.state.idx){
        return true;
        // }
        // return false;
    }

    componentWillReceiveProps () {
        this.setState({
            showSetting: false
        });
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
        // this.setState(this.props.data);
    }

    componentWillUnmount () {
    }

    // @this.eventUpdateContent
    handleChange (event) {
        let id = event.target.id;
        this.eventUpdateContent();
        // console.log(event.target.value);
        this.setState({[id]: event.target.value});
    }

    handleSetting () {
        this.eventUpdateContent();
        this.setState({showSetting: !this.state.showSetting});
    }


    handleSave () {
        this.eventUpdateContent();
        this.props.save(
            Object.assign({}, this.state,
                {idx: this.props.data.idx, content: this.codemirror.getValue()}));
    }


    eventUpdateContent () {
        this.setState({content: this.codemirror.getValue()});
        // return function () {
        //
        // }
    }

    eventBindCodemirror ($codemirror) {
        this.codemirror = $codemirror;
    }

    formatString (STATUS) {
        if (STATUS == STATE.FETCHING) return '保存中,请稍后...';
        if (STATUS == STATE.SUCCESS) return '保存成功';
        return STATUS;
    }

    render () {
        const model = Object.assign({}, this.props.data, this.state);
        let showSettingView;
        if (this.state.showSetting || true) {
            let $dateTime = new Date(this.props.data.createdAt);
            console.log($dateTime,this.props.data.createdAt)
            showSettingView =
                <div className={styles.setting} onClick={this.handleSetting.bind(this)}>
                    <div className="show" onClick={e=> {
                        e.stopPropagation()
                    }}>
                        <div className="showTime">
                            <span className="date">
                                {$dateTime.getDate() < 10 ? '0' : ''}{$dateTime.getDate()}
                            </span>
                            <span className="monthAndYear">
                                {$dateTime.getMonth()}
                                {$dateTime.getFullYear()}
                            </span>
                            <span className="weekAndTime">
                                {$dateTime.getDay()}
                                {$dateTime.getHours()}
                                {$dateTime.getMinutes()}
                            </span>
                        </div>
                        <ul>
                            <li>描述</li>
                            <li>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </li>
                            <li>分类</li>
                            <li>
                                <input type="text"/>
                            </li>
                            <li>标签</li>
                            <li>
                                <input type="text"/>
                            </li>
                            <li>字符数: {model.content.length}</li>
                            <li>阅读量: {model.viewCount||0}</li>
                        </ul>
                    </div>
                </div>;
        }

        // console.log(this.state);
        return (<div className={styles.Detail}>
            <div className="title">
                <span className="pal tag">H1</span>
                <input type="text" id="title" value={model.title} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleSetting.bind(this)}
                        className="peizhi">
                    <Icon name="peizhi"/>
                </button>
            </div>
            <div className="content">
                <MarkDown content={model.content} bindCodemirror={this.eventBindCodemirror.bind(this)}/>
                {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
                <div className="showController">
                    <span className="message">{this.formatString(this.props.saveing)}</span>
                    <span className="btnGroup">
                        <button className="btn submit" onClick={this.handleSave.bind(this)}>确认</button>
                        <button className="btn delete">删除</button>
                    </span>
                </div>
            </div>
            {showSettingView}
        </div>);
    }
}