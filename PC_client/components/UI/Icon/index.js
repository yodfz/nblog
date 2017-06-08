import React from 'react';
import styles from './index.less';

const animationList = [
    'loading1'
];
export default (props)=> {
    const animationClass = animationList.indexOf(props.name) > -1 ? 'icon-animation' : '';
    return (
        <i className={"iconfont icon-"
        + props.name + ' '
        + (props.className || '') +
        ' ' + animationClass}/>
    );
}