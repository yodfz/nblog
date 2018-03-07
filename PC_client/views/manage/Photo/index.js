import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import services from '../../../services';
import articleStyles from '../Article/Detail.less';
import utils from '../../../core/utils';
import handle from '../../../core/handle';
import {STATE} from '../../../store/actionsType';
import {Icon} from '../../../components/UI';

import ShowTime from '../../../components/Time/showTime';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    getPhotoList,
    deletePhotoDetail,
    updatePhotoDetail,
    savePhotoDetail,
    createPhotoDetail
} from '../../../store/actions/Photo';

@connect(
    state=> {
        return {state: state.Photo}
    },
    dispatch=>bindActionCreators({
        getPhotoList,
        deletePhotoDetail,
        updatePhotoDetail, savePhotoDetail, createPhotoDetail
    }, dispatch)
)
export default class PhotoIndex extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor (props) {
        super(props);
        this.state = Object.assign({}, {
            showSetting: false,
            isUpload: false
        }, {photo: props.state.photo});
        if (props.state.data.length == 0) {
            this.props.getPhotoList();
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
        // console.log(nextProps.data.idx, this.state.idx);
        console.log(!nextProps.state.photo.idx);
        if (nextProps.state.status == STATE.SUCCESS) {
            this.setState({photo: {}});
        }
        if (!nextProps.state.photo.idx ||
            (nextProps.state.photo && nextProps.state.photo.idx != this.state.photo.idx)) {
            this.setState({photo: nextProps.state.photo});
            //     console.log('componentWillReceiveProps');
        }
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
        this.props.savePhotoDetail(this.state.photo);
    }

    handleDelete () {

    }

    handleSelect ($obj) {
        const that = this;
        return function () {
            that.props.updatePhotoDetail($obj);
            that.setState({showSetting: true});
        }
    }

    handleLoadMore () {
        this.props.getPhotoList(this.props.state.pageIndex + 1);
    }

    handleUpload () {
        let that = this;
        let numberInvert = null;

        //点击上传图片
        this.refs.fileUploadControl.onchange = function () {
            if (that.state.isUpload) return;
            let file = that.refs.fileUploadControl.files[0];
            if (window.FileReader) {
                if (file.size >= (1024 * 1024 * 20)) {
                    window.alert('你选择的图片过大,当前图片大小:' + (file.size / (1024 * 1024)).toFixed(0) + 'MB,请选择小于20MB图片!');
                    return;
                }
                if (file.type.startsWith('image/')) {
                    that.state.isUpload = true;
                    let postFormData = new FormData();
                    let nowNumber = 0;
                    let resultNumber = 0;
                    let uploadProgressSpan = document.querySelector('#uploadProgress');

                    let fr = new FileReader();
                    fr.onloadend = function (e) {
                        that.refs.fileUploadImage.src = e.target.result;
                        // console.log(that.refs.fileUploadImage);
                    };
                    fr.readAsDataURL(file);
                    postFormData.append('file', file);
                    // 上传进度动画
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
                        that.refs.progresswidth.style.width = (100 - nowNumber.toFixed(2)) + '%';
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
                        // window.config.uploadImage +
                        let imageUrl =  data.data.data;
                        // that.props.updatePhotoDetail({url: imageUrl});
                        console.log(that.state.photo);
                        if (that.state.photo.idx > 0) {
                            that.setState({
                                photo: Object.assign({}, that.state.photo, {
                                    url: imageUrl,
                                    size: file.size
                                })
                            });
                        } else {
                            that.setState({
                                photo: Object.assign({}, that.state.photo, {
                                    url: imageUrl,
                                    size: file.size
                                })
                            });
                        }
                        that.state.isUpload = false;
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

    handleOnChange ($event) {
        let id = $event.target.id;
        this.setState({photo: Object.assign({}, this.state.photo, {[id]: $event.target.value})});
    }


    render () {
        let model = this.state.photo;
        let showSettingView;
        let loadingButton;

        if (this.state.showSetting) {
            let $dateTime = model.createdAt ? new Date(model.createdAt) : new Date();
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
                            <li style={{'position': 'relative'}}>
                                <div className="uploadImage">
                                    +
                                </div>

                                <div className="width"
                                     style={{'width': model.url ? '0' : ''}}
                                     ref="progresswidth"
                                     onClick={this.handleUpload.bind(this)}>
                                </div>
                                <img ref="fileUploadImage" onClick={this.handleUpload.bind(this)}
                                     src={model.url || "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}
                                     id="fileUploadImage"/>
                                <input type="file" id="fileUploadControl"
                                       ref="fileUploadControl"/>
                            </li>
                            <li>
                                <div className="progress">
                                    {/*<div className="width" ref="progresswidth">*/}
                                    <span id="uploadProgress"></span>
                                    {/*</div>*/}
                                </div>
                            </li>
                            <li>标题</li>
                            <li>
                                <input type="text"
                                       id="title"
                                       value={model.title}
                                       onChange={::this.handleOnChange}
                                />
                            </li>
                            <li>描述信息</li>
                            <li><input type="text"
                                       id="description" value={model.description}
                                       onChange={::this.handleOnChange}
                            /></li>
                            <li>
                                {this.props.state.detailStatus}
                            </li>
                            <li>
                                <button className="btn submit w100"
                                        onClick={::this.handleSave}
                                >
                                    {model.idx > 0 ? '修改图片' : '添加图片'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>;
        }

        if (this.props.state.status != STATE.FETCHING) {
            loadingButton = <button
                className="loadMoreButton"
                onClick={::this.handleLoadMore}>更多</button>;
        }

        return (
            <div className={styles.index}>
                <div className="nav">
                    <span>共计{this.props.state.total}张相片</span>
                    <button className="btn submit" onClick={e=> {
                        this.props.createPhotoDetail();
                        this.setState({showSetting: !this.state.showSetting});
                    }}>+ 上传相片
                    </button>

                    <button className="btn" onClick={e=> {
                        this.props.getPhotoList(1);
                    }}>
                        刷新
                    </button>

                </div>
                <div className="clear">
                    {
                        this.props.state.data.map(item=> {
                            return <div className="photo" key={item.idx}>
                                <div className="thumbnail" style={{'backgroundImage': 'url(' + item.url.replace('.','_thumb.') + ')'}}>

                                </div>
                                <p className="title">{item.title}</p>
                                <p className="info">
                                    {item.description}
                                </p>
                                <p>
                                    <a className="hoverText" onClick={::this.handleSelect(item)}>编辑</a>&nbsp;|&nbsp;
                                    <a className="hoverText delete"
                                       onClick={e=> {
                                           this.props.deletePhotoDetail(item.idx);
                                       }}>删除</a>
                                </p>
                            </div>;
                        })
                    }
                </div>
                {loadingButton}
                {(()=> {
                    if (this.props.state.status == STATE.FETCHING) {
                        return <div className="loadMore">
                            <Icon name="loading1"/>
                            &nbsp;&nbsp;正在获取数据中...
                        </div>
                    }
                })()}
                {showSettingView}
            </div>
        );
    }
}