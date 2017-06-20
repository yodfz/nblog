import React, {Component, PropTypes} from 'react';
import styles from './Detail.less';
import MarkDown from '../../../components/Markdown';
import ArticleSetting from '../../../components/Article/setting';
import {Icon} from '../../../components/UI';
import ShowTime from '../../../components/Time/showTime';
import {STATE} from '../../../store/actionsType';
import utils from '../../../core/utils';

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

    componentWillReceiveProps (nextProps) {
        // this.setState({
        //     showSetting: false
        // });
        // fixbug:由于点开侧边栏不再切换数据造成的问题
        // this.state = {};
        console.log(nextProps);

        if (nextProps.data.idx != this.props.data.idx) {
            this.setState(nextProps.data);
            console.log('componentWillReceiveProps');
        }
    }

    componentWillUpdate () {
        // nowIdx = this.props.data.idx;
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

    handleDelete () {
        let that = this;
        window.messageBox.showMsg({
            title: '',
            content: '是否删除这篇文章？一旦删除，无法找回。',
            ok: function (e) {
                // alert('ok');
                that.props.delete(that.props.data.idx);
            },
            cancel: function (e) {
                // alert('cancel')
            },
            type: 0,
            buttonText: '确定删除'
        });
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
    //
    // formatString (STATUS) {
    //     if (STATUS == STATE.FETCHING) return '保存中,请稍后...';
    //     if (STATUS == STATE.SUCCESS) return '保存成功';
    //     return STATUS;
    // }



    render () {
        const model = Object.assign({}, this.props.data, this.state);
        let showSettingView;
        if (this.state.showSetting) {
            let $dateTime = new Date(this.props.data.createdAt);
            showSettingView =
                <div className={styles.setting} onClick={this.handleSetting.bind(this)}>
                    <div className="show" onClick={e=> {
                        e.stopPropagation()
                    }}>
                        <ShowTime date={$dateTime} />

                        <ul>
                            <li>描述</li>
                            <li>
                                <textarea
                                    id="description" value={model.description||''} onChange={this.handleChange.bind(this)}
                                    cols="30" rows="5"></textarea>
                            </li>
                            <li>分类</li>
                            <li>
                                <input type="text"
                                       id="category" value={model.category||''}
                                       onChange={this.handleChange.bind(this)}
                                />
                            </li>
                            <li>标签</li>
                            <li>
                                <input type="text"
                                       id="tag" value={model.tag||''}
                                       onChange={this.handleChange.bind(this)}
                                />
                            </li>
                            <li>字符数: {model.content.length}</li>
                            <li>阅读量: {model.viewCount || 0}</li>
                            <li className="hText">复制文章链接</li>
                            <li className="hText">导出为PDF</li>
                            <li className="hText">导出为Markdown</li>
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
                    <span className="message">{utils.formatString(this.props.saveing)}</span>
                    <span className="btnGroup">
                        <button className="btn submit" onClick={this.handleSave.bind(this)}>确认</button>
                        <button className="btn delete" onClick={this.handleDelete.bind(this)}>删除</button>
                    </span>
                </div>
            </div>
            {showSettingView}
        </div>);
    }
}