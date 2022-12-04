<template>
  <div>
    <h2>我是about的内容</h2>
    <ul class="nav nav-pills">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/about/news"
          >News</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/about/message"
          >Message</router-link
        >
      </li>
    </ul>
    <div class="row">
      <!-- router-view标签显示路由的页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>
