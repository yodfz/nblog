const Head = (props) => (
    <div className="nav">
        <div className="w100">
            <div className="logo">
                <div className="logoJpg">
                    写代码的熊猫
                </div>
            </div>
            <ul className="menu">
                <li className={props.index==0?'action':''}>
                    <a href="/">首页</a>
                </li>
                <li className={props.index==1?'action':''}>
                    <a href="/article">文章</a></li>
                <li className={props.index==2?'action':''}>
                    <a href="/photo">摄影</a></li>
                <li className={props.index==3?'action':''}>
                    <a href="/about">关于我</a>
                </li>
            </ul>
        </div>
    </div>
)

export default Head