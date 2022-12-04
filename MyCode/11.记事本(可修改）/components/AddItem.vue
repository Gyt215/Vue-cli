<template>
  <div>
    <input
      type="text"
      placeholder="输入你的任务名，回车确认"
      v-model="newtodo"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddItem",
  data() {
    return {
      newtodo: "",
    };
  },
  // props获取的数据会添加到vc实例上
  // props: ["receive"],
  methods: {
    add() {
      // trim()方法用于去掉前后的空格
      if (this.newtodo.trim()) {
        const todoObj = { id: nanoid(), name: this.newtodo, done: false,isChange: false};
        this.newtodo ='';
        this.$emit('receive',todoObj);
        // this.receive(todoObj);
      }
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
input {
  width: 380px;
  padding: 5px;
  border: 1px solid #999;
  /* margin: 0 auto; */
  border-radius: 5px;
}
</style>
