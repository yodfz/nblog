import react from 'react'
import './index.less'
export default class Index extends react.PureComponent {
    render () {
        const data = this.props.data.data
        return <>
        <p className="photoTitle">MY PHOTO</p>
        <div>
            {data.map(item=><div className="thumbImg"><img src={`https://www.yodfz.com${item.url.replace('.','_thumb.')}`} /></div>)}
        </div>
        </>
    }
}