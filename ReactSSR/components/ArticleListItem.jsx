export default (props) => {
    let item = props.item||{}
    return (
        <div className="detail">
            <a href={`/detail/${item.id}/${item.title}.html`} className="title">
                {item.title}
            </a>
            <p className="info">
                <span className="category"></span>
                <span className="viewpoint">
                    {item.viewCount||0}<br/>
                阅读量</span>
                <span className="datetime">2018-08-29</span>
            </p>
        </div>
    )
}