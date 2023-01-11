module.exports = {
    title: '文档站',
    description: '游玩の插件api文档',
    
    base: '/',
    markdown: {
        lineNumbers: true
    },
    plugins:{
        // 'vuepress-plugin-auto-sidebar':{},
        'autobar':{},
        '@vuepress/back-to-top':{},
        '@vuepress/active-header-links':{}
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'LL官方文档', link: 'https://docs.litebds.com/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: 'Google', link: 'https://www.google.com/'},
        ]
    }
}
