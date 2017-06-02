var model = require('../model');
console.log('等待数据库初始化完成!');
setTimeout(function () {
    // 初始化数据
    // article
    model.article.create({
        title: '所谓的几年编程经验，潜台词指的是什么？',
        description:'其他技术不好说，但是一般公司招聘Java，对于几年编程经验的潜台词大概是这样的',
        content: '其他技术不好说，但是一般公司招聘Java，对于几年编程经验的潜台词大概是这样的：一年经验：公司最近业绩不错，我们就想招个人来打打杂，自己内部培养一下，不需要什么经验，人聪明就行。两年经验：预备役，三年的死完了你们就是下一个梯队的。三到四年经验：干活主力部队，时刻准备加班，伤亡率最高。五-六年经验：核心部队，平时主要负责攻坚有些难度的技术问题，带领兄弟们冲锋，保证现有平台系统稳定，虽然主要是二、三、四年的在打仗，但是要时刻提防他们反水，招你进来，希望你能明白你的主要任务。七-九年经验：我们最近要开始创业|开展新业务|开拓新研发中心了，需要种子部队。十年以上经验：第一种情况：你来吧，干不干活无所谓，你别呆在竞争对手公司就好。第二种情况：现任CTO|大部门总监是个傻鸟，我要干掉他。第三种情况：我有一个大胆的想法……当然，小公司--，大公司++,以上是普通公司。',
        tag: '文章',
        category: '资讯'
    });
    model.article.create({
        title: '前端性能优化的三个维度',
        description:'前端性能优化可以分为三个level：静态资源优化、接口访问优化、页面渲染速度优化，在操控门槛上依次递增',
        content: `前端性能优化可以分为三个level：静态资源优化、接口访问优化、页面渲染速度优化，在操控门槛上依次递增，优化效果上越发没有这么明显，所以很多小团队只会做到了第一个level
追求极致的前端性能体验，提升自己的level，come on ~
目录

一、静态资源优化
二、接口访问优化
首屏直出、同构
接口合并
三、页面渲染速度优化
四、总结
一、静态资源优化


这个level，主要是减少静态资源的加载时间，主要包括html、css、js和图片文件，静态资源的加载时间是前端性能最大的瓶颈（特别是图片），现如今优化的手段也很丰富，以下简要列举几种常用的方法
合并css、js文件，制作雪碧图：减少http的请求次数，节省网络请求时间
静态资源cdn分发：客户端可以通过最佳的网络链路加载静态资源
js、css文件压缩，图片压缩，gzip压缩：减少请求返回的数据量
静态资源缓存机制
权衡dns的查找
本文旨在提供一个清晰的优化思路，上述优化方法不做具体的说明，网上也能搜索到很多具体的教程，也可以留言、简信一起讨论
二、接口访问优化


如果第一个level做得好，可以保证静态资源以一个较快的速度加载出来，然而，此时情况并没有完美，依然还存在两个明显的问题：
静态资源加载完成了，页面依然还在转菊花，用户依然还在等待。现如今web应用已经走过完全由php和jsp等后端脚本语言渲染界面的时代，ajax异步加载数据的方式已经成为主流，各种前端的mvc框架层出不穷，先加载静态资源，在执行js中的ajax请求到后台请求数据，重新渲染界面已经是一种通行的方案，这样便出现了静态资源加载完成，页面可见，然而用户还需要等待请求数据的进度条的情况（特别是接口访问速度慢的时候）
用户点击任意一个按钮，进度条加载了半天，也没有响应。很多复杂的功能需要并行或者串行的请求很多接口才能完成，前端的网络状况稍微差一点，给与用户的体验都极差。
以上两个问题在网络情况优异，接口请求速度快的情况下都不是问题，然而终端如果是一个手机，常常连wifi都不能保证，3g/4g的网络你能期待它有多快，所以优化的潜力是巨大的

首屏直出、同构


对于上述的问题一，如果页面的初始化数据，在后端完成渲染，其它的用户交互使用ajax的方式完成，也就是传统意义上的首屏直出，就可以得到很好的解决
这种介于完全后端渲染和完全ajax渲染的方式是一个不错的思路，但是在node出现之前，很多人宁愿容忍首屏加载的菊花，也不愿意使用，为什么？因为前端和后端要维护两套模板，令人抓狂

node出来之后，前后端都都可以使用js语言，前后端同构（前端和后台公用模板代码）使得首屏直出重新拥有了生存的土壤，所以同构直出现在常常相提并论，形同一个成语

react在同构直出方面做得比较出众，更多相关知识，可以留言、简信讨论
接口合并


一个交互需要请求多个并行或串行接口实属正常，前端使用3g/4g等弱网络也着实是不可抗因素，所以最好的办法就是通过接口合并的方式来提高接口访问速度
后台提供的接口有其既有粒度，强行合并不合时宜，提供一个新的合并的接口也缺乏机动性（前端发现一个新的合并需求，就要求后端提供一个接口，后端有开发工作量不说，还得没完没了的发版）

如果把接口合并的主动权交给前端，那情况将会好很多，前端是最接近战火的地方，最知道应该如何组合接口。基于代理服务的接口合并方案应运而生（这是本人第一个值得骄傲的原创方案，这其中还包含了node实现，想想还有点小鸡动~）

欢迎使用node实现的基于代理服务的接口合并框架，欢迎建议、拍砖，您的意见是我优化的动力
页面渲染速度优化


在页面不复杂、dom层次不深的情况下，完成以上两个level，就已经足够了。然而在复杂的页面上，却还有很大的优化空间，页面渲染速度的优化很大的程度上依托于程序员的个人编程素质，下面简要列举几点：
css放在顶部：优先渲染
js放在底部：避免阻塞
减少DOM元素数量：这个最能体现变成水平了
img标签要设置高宽：减少重绘重排
另外，新晋前端框架 vue、react，虚拟dom的渲染方案，在内存中进行 dom diff 比较，做到最小化的操作真实的 dom （操作真实的 dom 常常会成为性能瓶颈），能极大的提高渲染速度

使用一些页面性能分析工具给自己的页面跑分，可以帮助养成良好的编程习惯、提升编程素质，例如：WebPagetest、Yslow
总结


极致的性能优化需要有清晰的step，这是理解以上三个维度的意义所在`,
        tag: '文章',
        category: '资讯'
    });
    model.article.create({
        title:'「猪队友」可以有多坑人？',
        content:`……我学校发生的事儿 据说化工的一个班发生的惨案。相信大家都听过一句话，最可怕的就是两个学渣，一个敢讲，一个敢听。但你们知道比这个更可怕的是什么嘛？上上个学期吧，他们班期末考试，据说有一门是化学什么来着（不是一个专业，记不住那绕口的名字 大佬原谅我）据说该课期末考试非常难除了数个学霸稍有把握，其他同学谈及这门课哀鸿遍野，所以……你懂的，大家都相互打招呼说传纸条给我 然后期末的时候大家都很高兴，因为真的有人传了答案，全班一个不落的抄了，考完后就连主教门前的黑铁德玛西亚雕像都自带磨皮美白效果般的顺眼了（铁人王进喜雕像）众人奔走相贺，共同迎接美好的假期，商量着暑假去哪玩儿……就好像他们不会挂科一样……没错，全班除了个别学霸，全部挂课 ，学委很生气啊，团支书也很生气，生活委员表示誓不摆休，素拓委员也表示今年的素拓分他别想加了……没错，班长传的答案，他觉得挂定了，自暴自弃的乱写，然后觉得至少不能我一个人死，然后抄了小纸条给舍友，告诉他是学霸的……天真无邪的舍友满心欢喜的抄完再传给身边的人……就这样滚雪球般的混遍了全班……在学霸还没来得及写完传答案之前，全班已经走了一半 &lt;img src="https://pic1.zhimg.com/v2-881813ad4162c49e71481964d72cecd8_b.jpg" data-rawwidth="700" data-rawheight="867" class="origin_image zh-lightbox-thumb" width="700" data-original="https://pic1.zhimg.com/v2-881813ad4162c49e71481964d72cecd8_r.jpg"&gt;被揪出来的班长很绝望……蹭了我两顿饭的情况告诉我全班要找他算账……然后他以请全班一顿饭的代价暂时保全了自己，问我这个吃遍校园周边的大师怎么办，我告诉他学校向东靠近高中的附近有一家以资助佛教为名的斋菜自助餐，十块钱一个人……听完他眼前一亮就没结账走了，所以我也没告诉他那家店很难吃……然后？然后啊……然后大半年没见到他了……我也不知道他身上发生了什么……`,
        tag: '扯蛋 瞎扯淡',
        category: '扯蛋'
    });
    model.article.create({
        title: '炮灰都不如 ---我们如何看待大学计算机教育',
        content: `dsh0416写了一篇文章，标题是《量产型炮灰工程师》，对培训班出来的同学做了一些评论，原文在这里https://ruby-china.org/topics/33036 ，对于dsh0416说的一些内容，我不太同意，写一点自己的想法，仅供参考。

        大学计算机教育问题很大

        培训班能存在一定有它自己的理由，仅仅吐槽是没有用的，以我有限的见识，大概总结了这么几个原因：

培训班存在的理由一：大学计算机教育与真实的软件产业之间存在巨大的鸿沟。如果说培训班是“量产型炮灰”的话，那么现在的大学教育甚至连炮灰都无法生产。以目前市场需求量比较大的前端开发为例，请问国内有几所大学开设了JavaScript和CSS课程？

培训班存在的理由二：如何保持终生学习的问题。有很多道友告诉我，大学毕业之后基本上就不看书了，因为没时间也没环境。而那种所谓的“高端培训班”，实际上更多的是提供了一个离开学校之后的环境而已。

培训班存在的理由三：学习效率的问题。很多做技术的道友成家立业有小孩之后，生活中的各种繁琐事情占据了大量时间。现在各种技术更新换代这么快，分工这么细致，如果全部靠自己一点一点去啃，根本没时间，这是无法抗拒的现实，就算天天吐槽也没法改变。俗话说，师傅领进门，修行在个人。如果刚好碰上了一个好的“师傅”，你能节约大量的时间，这一点想必各位道友自己都有体会的。所以，从这个角度，如果真的有好的培训班，我自己是会去听的。

他们没得选择

    毕业了，有人出国、有人考研、有人考公务员、有人回老家继承产业......但是，那些什么都没有的人，他们怎么办？

他们家庭条件不好；

他们的学校不是985、211；

他们没学过数据结构、操作系统、计算机网络；

他们甚至连自己的专业知识也学得不好（很多大学老师本身就是垃圾）；

那么，这些人怎么办？去街上流浪乞讨？

很多时候，他们没得选。万般皆是命，半点不由人。

一个相对公平的行业

    我的上一家公司，有一年开产品发布会，公司CEO说过一段话，大体的意思是这样的：软件开发是一个相对公平的行业，它不看你的家庭背景，你会就是会，不会就是不会。如果你不会，就算你爹是李刚那也不行。这个行业是为数不多的，相对公平的行业，穷人家的孩子在这里还能找到一些机会。

这些年，我一直记得这段话。

别担心，市场自己有淘汰机制

    dsh0416提到的那些情况确实是可观存在的，但是请不要忘记，用人单位不是傻子，市场自己会把这些人淘汰出局的。如果真的碰到dsh0416文中所说的那种不堪的状况，那些人肯定过不了试用期。

另一个角度，并不是所有的企业都能用得起大牛。培训班出来的同学，依然有自己的市场价值。就算只学会了如何使用IDE，就算只学了一些基本概念，也比从学校出来啥都不懂要强很多。

所以，别担心，市场自己有淘汰机制，那些确实很差劲的家伙，市场会把TA淘汰出局的。

都是出来卖的，谁也别看不起谁

    在市场经济里面，每个人本质上都是商人，你要拿出你的时间、精力或者产品去和别人做交换。说直白一点，都是出来卖的，谁也别看不起谁。

天地不仁，万物竞发。无论你是谁，无论你在哪里，无论你是怎么走上这条道路的，只要你凭借自己的力量获得市场的认可，我都对你表达敬意。

愿你日日精进，前途无量！`,
        tag: '文章',
        category: '资讯'
    });

    //user
    model.user.create({
        user: 'admin',
        pwd: 'admin',
        level: 0
    });
}, 3000);
