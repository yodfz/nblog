import './index.less'
// import {memo} from 'react'
import Link from 'next/link'

export default (props) => {
    console.log('MyHead render')
    return <div className="nav">
        <div className="content flex-x">
            <div className="logo">
                <div className="logoJpg">
                    写代码的熊猫
                </div>
            </div>
            <ul className="menu">
                <li className={props.index==0?'action':''}>
                    <Link href="/"><a>首页</a></Link>
                </li>
                <li className={props.index==1?'action':''}>
                    <Link href="/article"><a>文章</a></Link></li>
                <li className={props.index==2?'action':''}>
                    <Link href="/photo"><a>摄影</a></Link></li>
                <li className={props.index==3?'action':''}>
                    <Link href="/about"><a>关于我</a></Link>
                </li>
            </ul>
        </div>
    </div>
}