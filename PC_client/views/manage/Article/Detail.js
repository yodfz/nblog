import React, {Component, PropTypes} from 'react';
import styles from './Detail.less';
import MarkDown from '../../../components/Markdown';
import ArticleSetting from '../../../components/Article/setting';
import {Icon} from '../../../components/UI';
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
            showSetting:false
        };
        console.log('a');
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
        this.state = {
            showSetting:false
        };
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
        this.setState({showSetting:!this.state.showSetting});
    }

    eventUpdateContent () {
        this.setState({content:this.codemirror.getValue()});
        // return function () {
        //
        // }
    }

    eventBindCodemirror ($codemirror) {
        this.codemirror=$codemirror;
    }

    render () {
        let showSettingView;
        if(this.state.showSetting){
            showSettingView =  <ArticleSetting onClick={this.handleSetting.bind(this)}/>;
        }
        {/*this.setState(Object.assign({}, {*/}
            {/*// 标题*/}
            {/*title: '',*/}
            {/*// 描述*/}
            {/*description: '',*/}
            {/*// 正文内容*/}
        //     content: '',
        //     // 标签
        //     tag: '',
        //     // 类别
        //     category: '',
        // }, this.props.data));
        const model = Object.assign({},this.props.data,this.state);
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
            </div>
            {showSettingView}
        </div>);
    }
}