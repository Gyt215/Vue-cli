<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age + 1 }}</h3>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "I'm student",
    };
  },
  /* // 使用props接受数据简单接受方法
  props: ["name", "age"], */
  props: {
    age: {
      // 类型
      type: Number,
      // 必要的
      required: true,
    },
    name: {
      type: String,
      // 默认值
      default: "张三",
    },
  },
};
</script>