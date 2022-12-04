// 该文件用于创建路由器
import VueRouter from 'vue-router';
// 引入组件
import about from '../pages/about';
import home from '../pages/home';
import news from '../pages/news';
import message from '../pages/message';
// 暴露一个路由器
export default new VueRouter({
    routes: [
        {
            // 一级路由需要在path加上斜杠
            path: '/about',
            component: about,
            // 子路由
            children: [
                {
                    // 多级路由则不需要/
                    path: 'news',
                    component: news  
                },
                {
                    path: 'message',
                    component:message
                }
            ]
        },
        {
            path: '/home',
            component: home
        }
    ]
})