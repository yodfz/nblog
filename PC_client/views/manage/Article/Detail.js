import React, {Component, PropTypes} from 'react';
import styles from './Detail.less';
import MarkDown from '../../../components/Markdown';

export default class Detail extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super();
        this.state = {
            // 标题
            title: '',
            // 描述
            description: '',
            // 正文内容
            content: '',
            // 标签
            tag: '',
            // 类别
            category: '',
        };
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

    handleChange (event) {
        let id = event.target.id;
        this.setState({id: event.target.value});
    }

    render () {
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
        const model=this.props.data;
        return (
            <div className={styles.Detail}>
                <div className="title">
                    <span className="pal tag">H1</span>
                    <input type="text" id="title" value={model.title} onChange={this.handleChange}/>
                </div>
                <div className="content">
                    <MarkDown content={model.content}/>
                    {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
                </div>
            </div>
        );
    }
}