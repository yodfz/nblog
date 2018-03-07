window.config = {
    apiPre: 'http://localhost:7800/api/v1/',
    uploadImage: 'http://localhost:7800',
    leftMenu: [
        {
            idx: 1,
            icon: 'article',
            text: '文章',
            url: '/manage/article',
            active: true
        },
        {
            idx: 3,
            icon: 'setting',
            text: '系统',
            url: '/manage/system/EditPassword',
            active: false
        },
        {
            idx: 4,
            icon: 'photo',
            text: '相册',
            url: '/manage/photo',
            active: false
        },
        {
            idx: 5,
            icon: 'loading',
            text: '静态包管理',
            url: '/manage/staticZip',
            active: false
        },
        {
            idx: 2,
            icon: 'groupcopy5',
            text: '评论',
            url: '/manage/comment',
            active: false
        },
    ]
};;
