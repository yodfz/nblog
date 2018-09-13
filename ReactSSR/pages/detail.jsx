import React, {Component, PropTypes} from 'react'
import MyHead from '../components/Head'
import Head from 'next/head'
import Link from 'next/link'
import ArticleListItem from '../components/ArticleListItem'
import '../style/index.less'
import fetch from 'isomorphic-unfetch'
import url from '../url'
import config from '../fe.config'
export default class Detail extends Component {
    static async getInitialProps({req,query}) {
        const userAgent = req
            ? req.headers['user-agent']
            : navigator.userAgent
        return {userAgent,query}
    }
    render () {
        return [
        <Head>
            <title>{this.props.query.title}-{config.title}</title>
        </Head>,
        <MyHead index="1" key="head"></MyHead>,
        <div class="w100 article clear">
            <div style="float: left;width: 100%;">
                <% var nowDate = new Date(data.createdAt); %>
                {{set month = nowDate.getMonth()+1}}
                {{set date = nowDate.getDate()}}
                <div class="detail">
                    <a href="/detail/{{data.idx}}/{{data.title}}.html" class="title">{{data.title}}</a>
                    <p class="info">
                        <span class="category">{{data.category}}</span>
                        <span class="viewpoint">
                        {{data.viewCount}}<br/>
                        阅读量</span>
                        <span class="datetime">{{nowDate.getFullYear() + '-' + (month<10?'0':'') + month + '-' + (date<10?'0':'') + date}}</span>
                    </p>
                </div>
                <div class="content">
                    {{@data.content}}
                </div>
            </div>
        </div>
        <script src="/js/prism.js"></script>
        ]
    }
}