// 生成toc目录
(function(){
    var content = document.querySelector('.content .children')
    var title = []
    var html = []
    var idx = 0
    var toc = document.querySelector('.menuIndex')
    Array.prototype.forEach.call(content.children,p=>{
        if(p.innerText=='[TOC]'){
            p.style.display='none'
        }
        if(p.nodeName.startsWith('H')){
            p.id='menu_' + (idx++)
            title.push({title:p.innerText,idx,level:p.nodeName.replace('H','')})
        }
    })
    title.forEach(p=>{
        html.push('<a href=\'#menu_' + (p.idx-1) + '\' title=\'' + p.title 
        + '\' class=\'articleMenuList padding' + p.level + '\'>' + p.title + '</a>')
    })
    toc?toc.innerHTML = html.join(''):null
    // 跳转功能后期优化为scroll过渡
})();
// 为图片添加弹出
(function(){
    console.log('bind')
    var content = document.querySelector('.content .children')
    content.addEventListener('click',function(e){
        console.log(e)
        var node = e.srcElement
        if(node.nodeName =='IMG'){
            var lock = document.createElement('div')
            lock.className = 'lockScreen'
            lock.innerHTML = '<img src=\'' +  node.src + '\'/>'
            document.body.style.overflow = 'hidden'
            lock.onclick=function(){
                document.body.style.overflow = ''
                document.body.removeChild(lock)
            }
            document.body.appendChild(lock)
        }
    })
    // Array.prototype.forEach.call(content.children,p=>{
    //     p.onClick = function 
    // })
})()