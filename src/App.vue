<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'App'
})
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
  width: 100%;
}
</style>
