import React, {Component, PropTypes} from 'react';
import styles from './index.less';
export default class Markdown extends Component {
    static defaultProps = {};
    static propTypes = {};
    constructor (props) {
        super();
        this.editor=null;
    };

    componentWillMount () {
    }

    componentDidMount () {
        this.editor = new Editor({
            element:this.refs.MarkdownEditorMarkdownEditor// document.getElementById('editor')
        });
        this.editor.render();

    }

    shouldComponentUpdate () {
        return true;
    }

    componentWillUpdate () {
    }

    componentDidUpdate () {
        // console.log(this.props.content);
        // this.editor.render();
        console.log(this.editor.codemirror.setValue(this.props.content));

    }

    componentWillUnmount () {
    }

    handleMouseClick (event) {
        console.log(window.getSelection().toString());
    }

    render () {
        return (<div className={styles.index}>
            <textarea name="" id="" ref="MarkdownEditor" cols="30" rows="10" defaultValue={this.props.content}></textarea>
            {/*<div className="editor" onClick={this.handleMouseClick.bind(this)} ref="MarkdownEditor" contentEditable="true">*/}
            {/*</div>*/}
        </div>);
    }
}