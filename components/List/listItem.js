import react from 'react'
import Link from 'next/link'
import './listItem.less'

export default class listItem extends react.PureComponent {
    render () {
        console.log('listItem render:', this.props)
        const item = this.props.item
        return <section className="listItem">
            <div className="listItemTitle"><Link href={`/detail/${item.idx}/${item.title}.html`}><a># {item.title}</a></Link></div>
            <div className="listItemDescription">VIEW: {item.viewCount} , DATE: {item.createDate.split('T')[0]}</div>
            <div className="listItemDetail">{item.content.substr(0,item.content.length<200?item.content.length:200)}</div>
        </section>
    }
}