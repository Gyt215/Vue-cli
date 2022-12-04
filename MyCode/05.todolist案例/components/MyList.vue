<template>
  <div>
    <ul>
      <MyItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" 
        :delOnce = 'delOnce'
        :checker= 'checker'
        >
      </MyItem>
    </ul>
  </div>
</template>
    
<script>
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props:['todos','delOnce','checker']
  ,
  // data() {
  //   return {
  //     todos: [new Todo("01", "学习", false), new Todo("02", "睡觉", true)],
  //   };
  // },
};
</script>
<style scoped>
ul {
  width: 380px;
  /* padding-left: 5px; */
  border: 1px solid #999;
  margin: 20px auto;
  border-radius: 5px;
  list-style: none;
}
</style>