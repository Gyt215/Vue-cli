<template>
  <div>
    <!-- 可使用v-bind进行绑定获取number型数据 -->
    <Student name="李四" :age="15"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "app",
  components: {
    Student,
  },
};
</script>