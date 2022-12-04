<template>
  <div>
    <h3>{{ name }}</h3>
    <h3>{{ address }}</h3>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "信仰学院",
      address: "信阳",
    };
  },
  mounted() {
    // 接受订阅可以传递数据 将订阅放在vc实例上
    this.subscribeName = pubsub.subscribe("showName", (msg, name) => {
      console.log(name);
    });
  },
  beforeDestroy() {
    // 销毁订阅
    pubsub.unsubscribe(this.subscribeName);
  },
};
</script>

<style>
</style>