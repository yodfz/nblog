import react from 'react'
import './listItem.less'

export default class listItem extends react.PureComponent {
    render () {
        console.log('listItem render:', this.props)
        const item = this.props.item
        return <section className="listItem">
            <div className="listItemTitle"># {item.title}</div>
            <div className="listItemDescription">VIEW: {item.viewCount} , DATE: {item.createDate.split('T')[0]}</div>
            <div className="listItemDetail">{item.content.substr(0,item.content.length<200?item.content.length:200)}</div>
        </section>
    }
}