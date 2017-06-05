import React, {Component, PropTypes} from 'react';
import services from '../../services';
import styles from './index.less';
export default class Markdown extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super();
        this.editor = null;
    };

    componentWillMount () {
    }

    componentDidMount () {
        let that = this;
        this.editor = new Editor({
            element: this.refs.MarkdownEditor// document.getElementById('editor')
        });
        this.editor.render();
        this.refs.editor.addEventListener("drop", function (e) {console.log('drop');});
        this.refs.editor.addEventListener("dragover", function (e) {console.log('dragover');});
        this.refs.editor.addEventListener("paste", function (e) {
            var cbd = e.clipboardData;
            //var ua = window.navigator.userAgent;
            // for(var i = 0; i < cbd.items.length; i++) {
            var item = cbd.items[0];
            if (item.kind == "file") {
                var blob = item.getAsFile();
                if (blob.size === 0) {
                    return;
                }
                // blob 就是从剪切板获得的文件 可以进行上传或其他操作
                let postFormData = new FormData();
                postFormData.append('file', blob);
                services.upload(postFormData,{method:'POST'}).then(data=>{
                    that.editor.codemirror.replaceSelection('![Alt text](' + window.config.uploadImage + data.data.data + ')', 'Alt')
                });
            }
            // }
        }, false);
        // this.editor.codemirror.on('paste', function (editor, event) {
        //        console.log('codemirror paste');
        //         var data = editor.getValue();
        // });
    }

    shouldComponentUpdate () {
        return true;
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
        // console.log(this.props.content);
        // this.editor.render();
        // console.log();
        this.editor.codemirror.setValue(this.props.content);
        this.content = this.props.content;
        let previewactive = document.querySelector('.editor-preview-active');
        if (previewactive) {
            previewactive.classList.remove('editor-preview-active');
        }
    }

    componentWillUnmount () {
    }

    handleMouseClick (event) {
        // console.log(window.getSelection().toString());
    }

    render () {
        return (<div ref="editor" className={styles.index}>
            <textarea name="" id="" ref="MarkdownEditor" cols="30" rows="10"
                      defaultValue={this.props.content}></textarea>
            <div className="showController">
                <span className="message"></span>
                <span className="btnGroup">
                     <button className="btn submit">确认</button>
                <button className="btn cancel">重置</button>
                </span>
            </div>
            {/*<div className="editor" onClick={this.handleMouseClick.bind(this)} ref="MarkdownEditor" contentEditable="true">*/}
            {/*</div>*/}
        </div>);
    }
}