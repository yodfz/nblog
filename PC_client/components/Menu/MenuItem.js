import React, {Component, PropTypes} from 'react';
import {
    Link
} from 'react-router-dom';

export default (item) => {
    return (
        <Link to={item.url}>
            <li onClick={item.select} className={item.className}>
                <i className={"iconfont icon-" + item.icon}/>
                {item.text}
            </li>
        </Link>
    );
}