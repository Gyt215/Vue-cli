<template>
  <div>
    <h3 vc>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
  </div>
</template>

<script>
    export default {
        name:"Student",
        data() {
            return {
                name:"GYT",
                age:18
            }
            
        },
    };
</script>

<style>
</style>