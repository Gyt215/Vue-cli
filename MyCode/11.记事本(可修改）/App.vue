<template>
  <div>
    <!-- <School></School> -->
    <div class="main">
      <!-- 给additem一个方法接受新的数据 -->
      <AddItem @receive="receive"></AddItem>
      <!-- 将数据传给Mylist -->
      <MyList :todos="todos" :delOnce="delOnce" :checker="checker"> </MyList>
      <MyFooter
        :todos="todos"
        :delAll="delAll"
        :selAll="selAll"
        v-if="todos.length"
      >
      </MyFooter>
    </div>
  </div>
</template>

<script>
import AddItem from "./components/AddItem.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList";
function Todo(id, name, done) {
  this.id = id;
  this.name = name;
  this.done = done;
}
// 从浏览器中读取数据
function startArr() {
  // console.log(typeof(localStorage.getItem("todos")));
  // let arr = JSON.parse(localStorage.getItem("todos"));
  if (localStorage.getItem("todos") === "undefined") {
    return new Array();
  } else {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }
}
export default {
  name: "app",
  components: {
    AddItem,
    MyList,
    MyFooter,
  },
  data() {
    return {
      //短路与运算
      todos: startArr(),
    };
  },
  //   done: this.todos.filter(el=>el.done==false).length,
  //       sum: this.todos.length,
  methods: {
    isRepeat(e) {
      return this.todos.every((el) => {
        return el.name != e.name;
      });
    },
    // 接受新的todo
    receive(e) {
      // console.log(this.todos.findIndex((e)=>{
      //     return e.name=='学习'
      // }));
      if (this.isRepeat(e)) {
        this.todos.push(e);
      } else {
        alert("已经有相同元素了");
      }
    },
    // 删除某个todo
    delOnce(id) {
      // alert("确定要删除吗");
      console.log(1);
      // 删除
      this.todos.splice(
        // 找到id对应的todo的下标
        this.todos.findIndex((e) => {
          return e.id == id;
        }),
        1
      );
    },
    // 删除所有完成todo
    delAll() {
      // 拷贝所有未完成的的事件
      this.todos = this.todos.filter((el) => el.done == false);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    checker(id) {
      // console.log(1);
      // 将done取反
      this.todos.forEach((el) => {
        if (el.id === id) {
          el.done = !el.done;
        }
      });
      // let done = this.todos.filter((el) => el.done === true).length;
      // console.log(done);
      // if (done === this.todos.length>0) {
      //   this.selAll(true)
      // }
    },
    // 全选
    selAll(done) {
      // console.log(done);
      this.todos.map((el) => {
        el.done = done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      // immediate:true,
      handler(newValue) {
        // console.log(newValue);
        localStorage.setItem("todos", JSON.stringify(newValue));
      },
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  width: 400px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 20px 50px;
}
</style>
