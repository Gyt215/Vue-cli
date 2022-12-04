// 定义一个插件
export default {
    install(Vue) {
        // 添加一个全局过滤器
        Vue.filter('mySlice', (val) => {
            return val.slice(0, 2)
        })
    }
}
