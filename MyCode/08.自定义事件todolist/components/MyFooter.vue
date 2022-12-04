<template>
  <div>
    <!-- 实现当单选全部时自动全选
         点击全选时将isAll的值取反
         当参数，因为当点击复选框时总会做取反操作 
          v-model="isAll"     
    -->
    <input 
      type="checkbox" 
      :checked="isAll"
      @change="selAll(!isAll)"
       />
    <span>已完成{{ done }}/全部{{ todos.length }}</span>
    <button @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  computed: {
    done() {
      if (Array.isArray(this.todos)) {
        return this.todos.filter((el) => el.done === true).length;
      }else{
        return 0;
      }
      
    },
    // 是否全选
    isAll:{
        get(){
          // console.log(this.done);
          if (this.done == this.todos.length && this.todos.length > 0) {
            return true
          }else{
            return false
          }
        },
        // 可在set中调用selAll方法全选value为当前复选框状态,但要使用v-model
        set(value){
          this.selAll(value)
        }
      }
    },
  props: ["todos", "selAll", "delAll"],
};
</script>

<style scoped>
div {
  padding: 5px;
  margin-bottom: 10px;
}
div span {
  margin-left: 10px;
}
div button {
  float: right;
  width: 120px;
  height: 30px;
  background-color: #0dd;
  border: 1px groove #099;
  margin-top: -5px;
  margin-right: -5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
