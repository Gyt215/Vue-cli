<template>
  <div>
    <div class="container">
      <div class="row">
        <banner></banner>
      </div>
      <div class="row">
        <div class="list-group col-xs-2 text-center">
          <!-- 路由跳转标签 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/about"
          >
            about
          </router-link>
          <router-link class="list-group-item" active-class="active" to="/home">
            home
          </router-link>
        </div>
        <div class="col-xs-6">
          <!-- router-view标签显示路由的页面 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./components/banner.vue";

export default {
  name: "app",
  components: {
    banner,
  },
};
</script>

<style scoped>
</style>