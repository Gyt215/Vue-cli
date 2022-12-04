<template>
  <div>
    <li>
      <!-- 可以直接使用v-model但不推荐因为修改了props传来的数据 -->
      <!-- <input type="checkbox" name="todo" v-model="todo.done" /> -->
      <input type="checkbox" name="todo" 
        :checked="todo.done" 
        @change="checker(todo.id)" />
      <span>{{ todo.name }}</span>
      <button @click="delOnce(todo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  // 获取每个todo
  props: ["todo", "delOnce","checker"],
  // methods: {
  //   del(e){
  //     this.delOnce(e);
  //   }
  // },
};
</script>
<style scoped>
li {
  text-align: left;
  padding: 5px;
  border-bottom: 1px solid #999;
}
span {
  padding-left: 10px;
}
li button {
  display: none;
  float: right;
  width: 60px;
  height: 30px;
  background-color: #0bf;
  border: 1px groove #09a;
  margin-top: -4px;
  margin-right: -4px;
  border-radius: 5px;
  cursor: pointer;
}
li:hover{
  background-color: #bbb;
}
li:hover button{
  display: block;
}
</style>