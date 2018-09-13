import Link from 'next/link'
export default(props) => {
    let item = props.item || {}
    return (
        <div className="detail">
            <Link href={`/detail/${item.idx}/${item.title}.html`}>
                <a className="title">
                    {item.title}
                </a>
            </Link>
            <p className="info">
                <span className="datetime">{item
                        .updatedAt
                        .split('T')[0]}</span>
                <span className="category">{item.category}</span>
                <span className="viewpoint">
                    {item.viewCount || 0}<br/>
                    阅读量</span>
            </p>
        </div>
    )
}