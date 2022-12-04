import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './router/index';
// 使用路由插件
Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h => h(App),
    router:router
})
