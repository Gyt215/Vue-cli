<template>
  <div>
    <!-- 通过自定义属性进行传递  -->
    <!-- <School v-on:showName="showSchoolName"></School> -->
    <!-- ref写法 -->
    <School ref="school"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "app",
  components: {
    School,
  },
  methods: {
    showSchoolName(name){
      // console.log(1);
      console.log(name);
    }
  },
  // 在挂载完毕添加属性
  mounted() {
    // 使用refs和$on添加方法
    this.$refs.school.$on('showName', this.showSchoolName)
  },
};
</script>