import React, {Component, PropTypes} from 'react'
import MyHead from '../components/Head'
import Head from 'next/head'
import Link from 'next/link'
import '../style/index.less'
import fetch from 'isomorphic-unfetch'
import url from '../url'
import config from '../fe.config'
import marked from 'marked'

const html = `[TOC]

# 基本知识
\`this\`在JavaScript中属于经常使用的一个对象。在定义中，在Javascript中\`this\`总是指向调用它所在方法的对象，谁发起了调用,this将指向谁。

下面将描述一些案例，带领大家了解\`this\`

# 全局情况下的this

\`\`\`javascript
function test () {
    console.log(this)
}
test()
\`\`\`

直接输出了\`window\`对象，因为JS在查找的时候，发现\`this\`的指向是\`undefined\`，那么在JS会将\`this\`指向到\`window\`上。

\`\`\`javascript
"use strict"
function test () {
    console.log(this)
}
test()
\`\`\`

严格模式下，JS是不会将\`this\`指向到\`window\`上,所以输出是\`undefined\`。

![Alt text](http://www.yodfz.com/upload/20180829/1535534990000.png)

# 调用情况下的this
\`\`\`javascript
var obj = {
    name:'hero'
}
function test () {
    console.log(this)
}
obj.test = test
obj.test()
\`\`\`
这个代码很好的展示了，由谁调用,\`this\`就会被指向调用方所在对象。

![Alt text](http://www.yodfz.com/upload/20180829/1535535133000.png)

现在我们来思考一下，这种情况。

\`\`\`javascript
var obj = {
    name:'hero',
    proxy:{
        name:'proxy hero'
    }
}
function test () {
    console.log(this)
}
obj.proxy.test = test
console.log('obj.proxy.test')
obj.proxy.test()

var _p = obj.proxy
console.log('_p.test')
_p.test()
\`\`\`

这里并没有发生你们预想的
\`\`\`sh
obj.proxy.test
{name: "hero", proxy: {name: "proxy hero", test: ƒ}}
 _p.test
{name: "proxy hero", test: ƒ}
\`\`\`
而是
\`\`\`sh
obj.proxy.test
{name: "proxy hero", test: ƒ}
 _p.test
{name: "proxy hero", test: ƒ}
\`\`\`
这个例子表明了，\`this\`的绑定只受到最近的成员影响。所以，此时的\`this\`被绑定在\`proxy\`上。

# call,apply,bind的this
\`\`\`javascript
var obj = {
    name:'hero',
    test (postString) {
        console.log(this,postString)
    }
}
var obj2 = {name:'super hero'}
obj.test.call(obj2,'call')
obj.test.apply(obj2,['apply'])
\`\`\`
call,apply的机制是一样的，都是直接修改了内部\`this\`的指向。唯一的区别是call传入参数是挨个传入，apply是传入一整个参数数组。

![Alt text](http://www.yodfz.com/upload/20180829/1535536019000.png)

\`\`\`javascript
var obj = {
    name:'hero',
    test (postString) {
        console.log(this,postString)
    }
}
var obj2 = {name:'super hero'}
obj.test.bind(obj2)('bind')
\`\`\`
bind的机制与其他两个是不一样的，通俗的来说，就是bind设置之后，是蓄势待发。需要正常的执行，才能运行。这在\`react\`中经常使用。

在ES6提案中，你还可以使用这种方式进行bind。
\`\`\`javascript
// 函数绑定运算符是并排的两个冒号（::）
var k = obj2::obj.test
k('::bind')
\`\`\`
这个提案，现在暂时只有\`babel\`支持。

# 参考资料
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this`

export default class Detail extends Component {
    static async getInitialProps({req, query}) {
        const userAgent = req
            ? req.headers['user-agent']
            : navigator.userAgent
        const res = await fetch(url.articleDetail + query.id)
        const data = await res.json()
        return {userAgent, query,data}
    }
    componentWillMount () {
        console.log('componentWillMount')
        try{
            var script = document.createElement('script')
            script.src = '/static/js/prism.js'
            document.body.appendChild(script)
        }catch(err){

        }
        // <script src="/js/prism.js"></script>
    }
    render() {
        let detail = this.props.data.data
        return [ 
        <Head> 
            <title>{detail.title}-{config.title}</title>
            <link rel="stylesheet" href="/static/styles/prism.css" />
        </Head>,
        <MyHead index="1" key="head"></MyHead>,
        <div className = "w100 article clear">
            <div style={{float: 'left',width: '100%'}}>
            时间
                <div className="detail">
                    <a href="/detail/" className="title">标题</a>
                    <p className="info">
                        <span className="category">分类</span>
                        <span className="viewpoint">
                            阅读量<br/>
                            阅读量</span>
                        <span className="datetime">发布时间</span>
                    </p>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html:marked(html)}}>
               
                </div>
            </div>
        </div> 
        ]
    }
}