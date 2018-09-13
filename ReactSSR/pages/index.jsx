import React, {Component, PropTypes} from 'react'
import MyHead from '../components/Head'
import Head from 'next/head'
import Link from 'next/link'
import ArticleListItem from '../components/ArticleListItem'
import '../style/index.less'
import fetch from 'isomorphic-unfetch'
import url from '../url'
import config from '../fe.config'
export default class Index extends Component {
    static async getInitialProps({req}) {
        const userAgent = req
            ? req.headers['user-agent']
            : navigator.userAgent
        const res = await fetch(url.default)
        const data = await res.json()
        return {userAgent,data:JSON.parse(JSON.stringify(data))}
    }
    render() {
        let data = this.props.data.data
        return [ 
        <Head>
            <title>{config.title}</title>
        </Head>,
        < MyHead index = "0" key = "head" > </MyHead>, < div className = "vh100 w100 article clear" key = "body" > <div className="left70 leftList">
            {
                (()=>{
                    let $dom = []
                    for(let i=0,item;item = data.article[i++];){
                        $dom.push(<ArticleListItem item={item}/>)
                    }
                    return $dom
                })()
            }
            <Link href="/article">
                <a className="more">查看更多文章 +</a>
            </Link>
        </div>
        <div className= "rightDetail" > 
        <p className="title">
            热门文章
        </p> 
        < ul className = "link" > 
        {
                (()=>{
                    let $dom = []
                    for(let i=0,item;item = data.article[i++];){
                        $dom.push(<li>{i}.
                            <a href="/detail/1/微信小程序wx.request request:fail ssl hand shake error.html">微信小程序wx.request request:fail ssl hand shake error</a>
                        </li>)
                    }
                    return $dom
                })()
            }
        
        </ul> < p class = "title" > 友情链接 < /p>
                    <ul class="link">
                        <li><a href="http://www.yodfz.com">写代码的熊猫</a > </li> < /ul>
                    <p class="title">
                        扫码赞助
                    </p > <p class="price">
            <img
                src="/static/images/zfb.jpg"
                style={{
                width: '218px'
            }}
                alt=""/>
        </p> </div>
            </div >, < div className = "w100 newphoto" > <img src="/static/imgs/newphoto.png" alt=""/> < /div>
            ,
            <div className="w100 photoIndexList row wrap">
                <div class="photoDetail">
                    <a href="/photoDetail / 40. html ">
 < div class = "img" style = {{'background-image':'url(http://www.yodfz.com/upload/20180505/1525510424000_thumb.png)'}} > </div> < p > 西湖 - 花港观鱼 < /p>
                    </a > </div> < div class = "photoDetail" > <a href="/photoDetail/35.html">
            <div
                class="img"
                style={{
                'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
            }}></div>
            <p>
                白马湖动漫展 - 黑SABER
            </p>
        </a> < /div>

                <div class="photoDetail">
                    <a href="/photoDetail / 34. html ">
 < div class = "img" style = {{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}} > </div> < p > 白马湖动漫展 - 花嫁
                ? </p> < /a>
                </div > <div className="photoDetail photoDetailTitle">
                    <div className="title">
                        文艺范
                    </div>
                    <div className="des">
                        [风景]&nbsp;&nbsp;&nbsp;&nbsp;[人物]&nbsp;&nbsp;&nbsp;&nbsp;[植物]
                    </div>
                </div> < div class = "photoDetail" > <a href="/photoDetail/35.html">
                    <div
                        class="img"
                        style={{
                        'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
                    }}></div>
                    <p>
                        白马湖动漫展 - 黑SABER
                    </p>
                </a> < /div>

                <div class="photoDetail">
                    <a href="/photoDetail / 34. html ">
 < div class = "img" style = {{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}} > </div> < p > 白马湖动漫展 - 花嫁
                    ? </p> < /a>
                </div > <div class="photoDetail">
                        <a href="/photoDetail/35.html">
                            <div
                                class="img"
                                style={{
                                'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
                            }}></div>
                            <p>
                                白马湖动漫展 - 黑SABER
                            </p>
                        </a>
                    </div> < div className = "photoDetail photoDetailTitle" > <div className="title">
                        视觉系
                    </div> < div className = "des" > 
                    [航拍] &nbsp;&nbsp;&nbsp;&nbsp;[生活] &nbsp;&nbsp;&nbsp;&nbsp;[静物] < /div>
                </div > <div class="photoDetail">
                <a href="/photoDetail/34.html">
                    <div
                        class="img"
                        style={{
                        'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'
                    }}></div>
                    <p>
                        白马湖动漫展 - 花嫁?
                    </p>
                </a>
            </div> < div class = "photoDetail" > <a href="/photoDetail/35.html">
                <div
                    class="img"
                    style={{
                    'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
                }}></div>
                <p>
                    白马湖动漫展 - 黑SABER
                </p>
            </a> < /div>

                <div class="photoDetail">
                    <a href="/photoDetail / 34. html ">
 < div class = "img" style = {{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}} > </div> < p > 白马湖动漫展 - 花嫁
                ? </p> < /a>
                </div > <div className="photoDetail photoDetailTitle">
                    <div className="title">
                        转瞬即逝
                    </div>
                    <div className="des">
                        [手机]&nbsp;&nbsp;&nbsp;&nbsp;[荷花]&nbsp;&nbsp;&nbsp;&nbsp;[动物]
                    </div>
                </div> < div class = "photoDetail" > <a href="/photoDetail/35.html">
                    <div
                        class="img"
                        style={{
                        'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'
                    }}></div>
                    <p>
                        白马湖动漫展 - 黑SABER
                    </p>
                </a> < /div>

                <div class="photoDetail">
                    <a href="/photoDetail / 34. html ">
 < div class = "img" style = {{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}} > </div> < p > 白马湖动漫展 - 花嫁
                    ? </p> < /a>
                </div > <div class="photoDetail">
                        <a href="/photoDetail/33.html">
                            <div
                                class="img"
                                style={{
                                'background-image': 'url(http://www.yodfz.com/upload/20180501/1525146529000_thumb.png)'
                            }}></div>
                            <p>
                                白马湖动漫展 - 兔子
                            </p>
                        </a>
                    </div> </div>
        ]
    }
}