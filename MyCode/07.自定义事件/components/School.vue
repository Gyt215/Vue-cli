<template>
  <div>
    <h2>名字：{{ name }}</h2>
    <h2>地址：{{ address}}</h2>
    <h2 @click="add">累加器：{{sum}}</h2>
    <button @click="showSchoolName">输出名字</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁当前实例</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "小明",
      address: "中国北京",
      sum: 1,
    };
  },
  methods: {
    add(){
      console.log("444444");
      this.sum++
    },
    showSchoolName(){
      console.log(111);
      this.$emit("showName",this.name)
    },
    putstr(){
      console.log(111);
    },
    unbind(){
      // 可以调用methods中的其他函数
      // this.putstr();
      this.$off('showName')
    },
    death(){
      // 销毁后所有的事件均不能再用
      console.log("销毁当前实例");
      this.$destroy()
    }
  },
};
</script>

<style scoped>
  button{
    display: block;
    margin: 5px;
  }
  h2{
    user-select: none;
  }
</style>