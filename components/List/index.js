import react from 'react'
import ListItem from './listItem'
import './index.less'
export default class Index extends react.PureComponent  {

    render () {
        console.log('list render')
        return <>
            {
                this.props.data.data.map(item=><ListItem key={item.idx} item={item} />)
            }
        </>
    }
}