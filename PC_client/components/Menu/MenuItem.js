import React, {Component, PropTypes} from 'react';

export default (item) => {
    return (<li
        className={item.active ? 'selected' : ''}>
        <i className={"iconfont icon-" + item.icon}/>
        {item.text}
    </li>);
}