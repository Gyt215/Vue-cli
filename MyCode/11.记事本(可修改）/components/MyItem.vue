<template>
  <div>
    <li>
      <!-- 可以直接使用v-model但不推荐因为修改了props传来的数据 -->
      <!-- <input type="checkbox" name="todo" v-model="todo.done" /> -->
      <input
        type="checkbox"
        name="todo"
        :checked="todo.done"
        @change="checker(todo.id)"
      />
      <span v-show="!todo.isChange">{{ todo.name }}</span>
      <input
        type="text"
        class="textBox"
        @blur="handlerChange"
        @keyup.enter="handlerChange"
        v-model="todo.name"
        v-show="todo.isChange"
        ref="inputText"
      />
      <button class="redBut" @click="delOnce(todo.id)">删除</button>
      <button class="skyblueBut" @click="handlerChange" v-show="!todo.isChange">
        修改
      </button>
      <button class="skyblueBut" @click="handlerChange" v-show="todo.isChange">
        确认
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  // 获取每个todo
  props: ["todo", "delOnce", "checker"],
  methods: {
    handlerChange() {
      // this.todo.isChange=!this.todo.isChange;
      if (this.todo.name.trim()) {
        this.todo.isChange = !this.todo.isChange;
        this.$nextTick(()=>{
          this.$refs.inputText.focus();
        })
        // console.log(this.todo);
      } else {
        alert("不能为空");
      }
    },
  },
};
</script>
<style scoped>
li {
  text-align: left;
  height: 40px;
  /* padding: 5px; */
  line-height: 40px;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
}
.textBox{
  height: 30px;
  margin-left: 5px;
}
span {
  padding-left: 10px;
}
li button {
  display: none;
  float: right;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  margin-right: 4px;
  border-radius: 5px;
  cursor: pointer;
}
.skyblueBut {
  background-color: skyblue;
  border: 1px groove skyblue;
}
.redBut {
  background-color: red;
  border: 1px groove red;
}
li:hover {
  background-color: #eee;
}
li:hover button {
  display: block;
}
li button:hover {
  opacity: 0.6;
}
</style>