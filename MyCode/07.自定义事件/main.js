import Vue from 'vue'
import App from './App.vue'
// 使用插件
// 全局引入混合，所有组件都可用
// 通过use（）方法使用插件
new Vue({
    el: '#app',
    render: h => h(App),
})
