<script lang="ts" setup>
import { ref, watchEffect } from '@vue/runtime-core';

let counter = ref(0);

function counterAdd() {
  counter.value++;
}

// 返回值为一个函数 执行就会停止监听
const stopWatch = watchEffect(() => {
  // 自动收集响应式数据
  console.log('watchEffecr被执行');
  console.log(counter.value);

  if (counter.value >= 5) {
    stopWatch();
  }
});
</script>

<template>
  <h2>counter: {{ counter }}</h2>
  <button @click="counterAdd">点击</button>
  <h2>test</h2>
</template>

<style lang="less" scoped>
</style>

