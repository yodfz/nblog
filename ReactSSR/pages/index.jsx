import React, {Component, PropTypes} from 'react'
import MyHead from '../components/Head'
import CustomFooter from '../components/CustomFooter'
import ArticleListItem from '../components/ArticleListItem'
import '../style/index.less'
export default class Index  extends Component  {
    render () {
        return  [
            <MyHead index="0" key="head"></MyHead>,
            <div className="vh100 w100 article clear" key="body">
                <div className="left70 leftList">
                    <ArticleListItem />




                    <div class="detail">
                        <a href="/detail/26/Spring Boot操作Sqlite数据库 从入门到跑路.html" class="title">Spring Boot操作Sqlite数据库 从入门到跑路</a>
                        <p class="info">
                            <span class="category">Java</span>
                            <span class="viewpoint">
                 107<br/>
                阅读量</span>
                            <span class="datetime">2018-08-28</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/25/git commit message标准化.html" class="title">git commit message标准化</a>
                        <p class="info">
                            <span class="category">git</span>
                            <span class="viewpoint">
                 154<br/>
                阅读量</span>
                            <span class="datetime">2018-07-30</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/24/移动端Rem布局方案.html" class="title">移动端Rem布局方案</a>
                        <p class="info">
                            <span class="category">css</span>
                            <span class="viewpoint">
                 353<br/>
                阅读量</span>
                            <span class="datetime">2018-07-23</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/23/Flutter 部署真机出现异常.html" class="title">Flutter 部署真机出现异常</a>
                        <p class="info">
                            <span class="category">Flutter</span>
                            <span class="viewpoint">
                 262<br/>
                阅读量</span>
                            <span class="datetime">2018-07-18</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/22/NUXT内存泄漏引发问题.html" class="title">NUXT内存泄漏引发问题</a>
                        <p class="info">
                            <span class="category">nuxt vue</span>
                            <span class="viewpoint">
                 1157<br/>
                阅读量</span>
                            <span class="datetime">2018-05-01</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/21/nginx配置Let&#39;s Encrypt https证书与开启http2协议.html" class="title">nginx配置Let&#39;s Encrypt https证书与开启http2协议</a>
                        <p class="info">
                            <span class="category">nginx</span>
                            <span class="viewpoint">
                 649<br/>
                阅读量</span>
                            <span class="datetime">2018-04-04</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/20/编写vue插件并且发布在npm上.html" class="title">编写vue插件并且发布在npm上</a>
                        <p class="info">
                            <span class="category">前端开发</span>
                            <span class="viewpoint">
                 804<br/>
                阅读量</span>
                            <span class="datetime">2018-03-15</span>
                        </p>
                    </div>




                    <div class="detail">
                        <a href="/detail/19/JavaScript 的 同步，异步，Event-Loop，线程.html" class="title">JavaScript 的 同步，异步，Event-Loop，线程</a>
                        <p class="info">
                            <span class="category">前端开发</span>
                            <span class="viewpoint">
                 947<br/>
                阅读量</span>
                            <span class="datetime">2018-03-15</span>
                        </p>
                    </div>
                    <div class="detail">
                        <a href="/detail/18/ContentType.html" class="title">ContentType</a>
                        <p class="info">
                            <span class="category">前端开发</span>
                            <span class="viewpoint">
                 785<br/>
                阅读量</span>
                            <span class="datetime">2018-03-15</span>
                        </p>
                    </div>

                    <a href="/article" class="more">查看更多文章>></a>
                </div>
                <div class="rightDetail">
                    <p class="title">
                        热门文章
                    </p>
                    <ul class="link">

                        <li>1. <a href="/detail/1/微信小程序wx.request request:fail ssl hand shake error.html">微信小程序wx.request request:fail ssl hand shake error</a></li>

                        <li>2. <a href="/detail/15/安装electron，与安装失败问题的解决方案.html">安装electron，与安装失败问题的解决方案</a></li>

                        <li>3. <a href="/detail/14/electron编译node模块.html">electron编译node模块</a></li>

                        <li>4. <a href="/detail/16/react服务端渲染.html">react服务端渲染</a></li>

                        <li>5. <a href="/detail/13/electron编译sqlite3遇到的一些问题.html">electron编译sqlite3遇到的一些问题</a></li>

                        <li>6. <a href="/detail/22/NUXT内存泄漏引发问题.html">NUXT内存泄漏引发问题</a></li>

                        <li>7. <a href="/detail/17/什么是闭包.html">什么是闭包</a></li>

                        <li>8. <a href="/detail/19/JavaScript 的 同步，异步，Event-Loop，线程.html">JavaScript 的 同步，异步，Event-Loop，线程</a></li>

                        <li>9. <a href="/detail/12/ 浏览器重绘和回流.html"> 浏览器重绘和回流</a></li>

                        <li>10. <a href="/detail/20/编写vue插件并且发布在npm上.html">编写vue插件并且发布在npm上</a></li>

                    </ul>
                    <p class="title">
                        友情链接
                    </p>
                    <ul class="link">
                        <li><a href="http://www.yodfz.com">写代码的熊猫</a></li>
                    </ul>
                    <p class="title">
                        扫码赞助
                    </p>
                    <p class="price">
                        <img src="/static/images/zfb.jpg" style={{width: '218px'}} alt="" />
                    </p>
                </div>
            </div>,
            <div className="w100 photoIndexList row wrap">
                <div class="photoDetail">
                    <a href="/photoDetail/40.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180505/1525510424000_thumb.png)'}}>

                        </div>
                        <p>
                            西湖-花港观鱼
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/35.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 黑SABER
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/34.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 花嫁?
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/35.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 黑SABER
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/34.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 花嫁?
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/35.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 黑SABER
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/34.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 花嫁?
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/35.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 黑SABER
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/34.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 花嫁?
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/35.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146656000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 黑SABER
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/34.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146569000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 花嫁?
                        </p>
                    </a>
                </div>

                <div class="photoDetail">
                    <a href="/photoDetail/33.html">
                        <div class="img" style={{'background-image':'url(http://www.yodfz.com/upload/20180501/1525146529000_thumb.png)'}}>

                        </div>
                        <p>
                            白马湖动漫展 - 兔子
                        </p>
                    </a>
                </div>

            </div>,
            <CustomFooter/>
        ]
    }
}