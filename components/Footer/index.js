import './index.less'
export default () => {
    return <div className="footer">
        <div className="content">
            <p>© 2017-2019 All Rights Reserved,浙ICP备09026245号</p>
            <p>当前系统遵从Apache License开源协议开源 <a href="https://github.com/yodfz/nblog" target="_blank">[GitHub]</a></p>
        </div>
        <div style={{ display: 'none', 'height': 0 }}>
            <script src="https://hm.baidu.com/hm.js?1777f0fe0a70e49ecffcc2f72658af37"></script>
            {/* <script dangerouslySetInnerHTML={{__html:` var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?1777f0fe0a70e49ecffcc2f72658af37";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`}}>
        </script> */}
        </div>
    </div>
}