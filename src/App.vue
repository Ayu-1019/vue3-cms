<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <div>123</div>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
</template>

<style lang="less" scoped>

</style>
