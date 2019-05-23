import React,{PureComponent,memo} from 'react';
import MyHead from '../../components/MyHead/index'
import fetch from 'isomorphic-fetch'

import List from '../../components/List/index'
import LayoutLeftAndRight from '../../components/Layout/LeftAndRight'
import Footer from '../../components/Footer/index'
import MyInfo from '../../components/Plugin/MyInfo'
import FriendLinks from '../../components/FriendLinks/index'
import IndexPhotoList from '../../components/IndexPhotoList/index'
export default class Index extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    static async getInitialProps({req}) {
        const articleData = await fetch('https://www.yodfz.com/api/v1/article').then(res=>res.json())
        const photoData = await fetch('https://www.yodfz.com/api/v1/photo').then(res=>res.json())
        return {article:articleData,photo:photoData}
    }

    render () {
        console.log('app render')
        return <>
            <MyHead index={0}/>
            <LayoutLeftAndRight 
                left={<List data={this.props.article}/>}
                right={[<MyInfo key="MyInfo"/>,<FriendLinks key="FriendLinks" />,
                <IndexPhotoList key="IndexPhotoList" data={this.props.photo} />
                ]}
            />
            <Footer />
        </>
    }
}