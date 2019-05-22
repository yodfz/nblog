import React,{PureComponent,memo} from 'react';
import MyHead from '../../components/MyHead/index'
import fetch from 'isomorphic-fetch'

import List from '../../components/List/index'
import LayoutLeftAndRight from '../../components/Layout/LeftAndRight'
import Footer from '../../components/Footer/index'
export default class Index extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    static async getInitialProps({req}) {
        const articleData = await fetch('https://www.yodfz.com/api/v1/article').then(res=>res.json())
        return {article:articleData}
    }

    render () {
        console.log('app render')
        return <>
            <MyHead index={0}/>
            <LayoutLeftAndRight left={<List data={this.props.article}/>}/>
            <Footer />
        </>
    }
}