// 定义一个插件
export default {
    install(Vue) {
        // 添加一个全局过滤器
        Vue.Todo = function (id, name, done) {
            this.id = id;
            this.name = name;
            this.done = done;
        }
    }
}
