<template>
  <div>
    <h3 @click="showName">{{ name }}</h3>
    <h3>{{ address }}</h3>
  </div>
</template>

<script>
// import { mixin } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "信仰学院",
      address: "信阳",
    };
  },
  //   mixins: [mixin],
};
</script>

<style>
</style>