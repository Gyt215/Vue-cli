<template>
  <div>
    <h2>名字：{{ name }}</h2>
    <h2>地址：{{ address | mySlice }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "小明",
      address: "中国北京",
    };
  },
};
</script>