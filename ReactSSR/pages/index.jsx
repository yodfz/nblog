import React, {Component, PropTypes} from 'react'
import MyHead from '../components/Head'
import '../style/index.less'
export default class Index  extends Component  {
    render () {
        return  [
            <MyHead index="0" key="head"></MyHead>,
            <div key="body">
                <p>Hello Next.js</p>
            </div>
        ]
    }
}