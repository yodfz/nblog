import React, {Component, PropTypes} from 'react';

export default (item) => {
    return (<li
        onClick={item.select}
        className={item.className}>
        <i className={"iconfont icon-" + item.icon}/>
        {item.text}
    </li>);
}