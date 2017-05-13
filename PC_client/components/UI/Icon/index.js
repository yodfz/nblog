import React from 'react';

export default (props)=> {
    return (
        <i className={"iconfont icon-" + props.name + ' ' + (props.className||'')}/>
    );
}