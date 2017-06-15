import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import services from '../../../services';
import articleStyles from '../Article/Detail.less';
import utils from '../../../core/utils';

import ShowTime from '../../../components/Time/showTime';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPhotoList, updatePhotoDetail} from '../../../store/actions/Photo';

console.log(getPhotoList);

@connect(
    state=> {
        return {state: state.Article}
    },
    dispatch=>bindActionCreators({getPhotoList, updatePhotoDetail}, dispatch)
)
export default class PhotoIndex extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
        this.state = {
            showSetting: true
        };
        this.props.getPhotoList();
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

    handleSave () {

    }

    handleUpload () {
        let that = this;
        let numberInvert = null;

        this.refs.fileUploadControl.onchange = function () {
            let file = that.refs.fileUploadControl.files[0];
            if (window.FileReader) {
                if (file.size >= (1024 * 1024 * 5)) {
                    window.alert('你选择的图片过大,当前图片大小:' + (file.size / (1024 * 1024)).toFixed(0) + 'MB,请选择小于5MB图片!');
                    return;
                }
                if (file.type.startsWith('image/')) {

                    let postFormData = new FormData();
                    let nowNumber = 0;
                    let resultNumber = 0;
                    let uploadProgressSpan = document.querySelector('#uploadProgress');
                    postFormData.append('file', file);
                    numberInvert && clearInterval(numberInvert);
                    numberInvert = setInterval(function () {
                        if (nowNumber < resultNumber) {
                            if ((resultNumber - nowNumber) < 1) {
                                nowNumber += 0.01;
                            } else if ((resultNumber - nowNumber) > 10) {
                                nowNumber += 1;
                            } else {
                                nowNumber += 0.1;
                            }
                        } else {
                            return;
                        }
                        if (nowNumber > resultNumber) nowNumber = resultNumber;
                        if (nowNumber >= 100 || resultNumber == 100) {
                            nowNumber = 100;
                        }
                        uploadProgressSpan.innerText = nowNumber.toFixed(2) + '%';
                        that.refs.progresswidth.style.width = nowNumber.toFixed(2) + '%';
                        if (nowNumber >= 100) {
                            clearInterval(numberInvert);
                        }
                    }, 30);
                    services.upload(postFormData, {
                        method: 'POST',
                        onUploadProgress: (progressEvent)=> {
                            resultNumber = ((progressEvent.loaded / progressEvent.total).toFixed(4)) * 100;
                            // loaded: 306203, total: 306203
                        }
                    }).then(data=> {
                        that.refs.fileUploadControl.value = '';
                        // window.config.uploadImage
                        // {"errorNo":0,"errorMessage":"","data":"/upload/20170614/1497423078000.jpg"}
                        console.log(data);
                        let imageUrl = window.config.uploadImage + data.data;
                        thath.props.updatePhotoDetail({url: imageUrl});

                        // that.editor.codemirror.replaceSelection('![Alt text](' + window.config.uploadImage + data.data.data + ')', 'Alt')
                    });

                    // let fr = new FileReader();
                    // fr.onloadend = function (e) {
                    //     // console.log(e.target.result);
                    //
                    // };
                    // fr.readAsArrayBuffer(file);


                    //  onUploadProgress: function (progressEvent) {
                    // Do whatever you want with the native progress event
                    // },
                } else {
                    window.alert('上传图片类型不正确!');
                }
            }
        };
        this.refs.fileUploadControl.click();
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
                                <div className="uploadImage" onClick={this.handleUpload.bind(this)}>
                                    +
                                </div>
                                <input type="file" id="fileUploadControl"
                                       ref="fileUploadControl"/>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="width" ref="progresswidth">
                                        <span id="uploadProgress"></span>
                                    </div>
                                </div>
                            </li>
                            <li>标题</li>
                            <li>
                                <input type="text"
                                       id="title" value={model.title || ''}
                                />
                            </li>
                            <li>描述信息</li>
                            <li><input type="text"
                                       id="description" value={model.description || ''}
                            /></li>
                            <li>
                                <button className="btn submit w100"
                                        onClick={this.handleSave.bind(this)}
                                >
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
                        this.setState({showSetting: !this.state.showSetting});
                        console.log(this, this.state.showSetting);
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