<template>
  <div>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="sendName">发布</button>
    <br>
    <button @click="getText">获取</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import axios from "axios"
export default {
  name: "Student",

  data() {
    return {
      name: "张赞",
      age: 20,
      arr:['1','2']
    };
  },
  methods: {
    // 发布订阅
    sendName() {
      pubsub.publish("showName", this.name);
    },
    getText() {
      // 本地请求文件默认从public中找
      axios
        .get("http://localhost:8080/a.txt")
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>