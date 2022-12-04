<template>
  <div>
    <h3 @click="showName">姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
// import { mixin } from "../mixin";

export default {
  name: "Student",
  // 添加混合，不加引号当作变量调用
  // mixins: [mixin],
  data() {
    return {
      name: "张赞",
      age: 20,
    };
  },
};
</script>