<template>
    <div>
        <h1 class="aa">hello world</h1>
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data ()
        {
            return{
                msg:'这是一个路由'
            }
        }
  }
</script>
<style>
.aa{
    color: yellowgreen
}
</style>
