<script lang="ts" setup>
import useCount from '@/store/count';
import { ref, watchEffect } from '@vue/runtime-core';

let counter = ref(0);

function counterAdd() {
  counter.value++;
}

const countStore = useCount();

const onClick = () => {
  countStore.count++;
};

const resetCount = () => {
  countStore.$reset();
};

const patchCount = () => {
  countStore.$patch({
    count: 666,
    user: 'alive'
  });
};

console.log('test');

const action = () => {
  countStore.increment(10);
};

// 返回值为一个函数 执行就会停止监听
const stopWatch = watchEffect(() => {
  // 自动收集响应式数据 数据改变 -> 执行
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
  <hr />
  <h2>pinia count {{ countStore.count }}</h2>
  <button @click="onClick">+ 1</button>
  <button @click="resetCount">重置</button>
  <div>
    {{ countStore.user ? 'YES' : 'NO' }}
  </div>
  <button @click="patchCount">patch</button>
  <hr />
  <div>getter-doubleCount: {{ countStore.doubleCount }}</div>
  <div>getter-doubleAddOne: {{ countStore.doubleAddOne }}</div>
  <hr />
  <div>{{ countStore.count }}</div>
  <button @click="action">+ 10</button>
</template>

<style lang="less" scoped></style>
