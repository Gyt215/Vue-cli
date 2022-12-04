<template>
  <div>
    <Student></Student>
    <School ref="sch"></School>
    <button @click="showDOM" ref="but">点我输出DOM元素</button>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "app",
  components: {
    Student,
    School,
  },
  methods: {
    showDOM() {
      // 该this为Vc组件实例对象
      console.log(this.$refs.but);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>