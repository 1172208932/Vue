<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <router-link to="/text">测试</router-link>
    <router-link :to="{name:'/text/text1',params:{username:'xiaoxu',age:32}}">子路油1</router-link>
    <router-link to="/text/text2">子路油2</router-link>
    <router-link to="/texturl/5/zhangsan">url</router-link>
    <router-link to="/home">重定向</router-link>
    <router-link to="/counter">计算器</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
