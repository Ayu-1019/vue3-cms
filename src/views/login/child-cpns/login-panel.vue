<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/store/modules/user';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    let { name, age } = storeToRefs(userStore);

    function clickFun(): void {
      age.value++;
    }
    function clickFun2(): void {
      userStore.changeUserAge();
    }

    return {
      name,
      age,
      userStore,
      clickFun,
      clickFun2
    };
  }
});
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <h3>{{ name }}已经{{ age }}岁了</h3>
    <h3>{{ userStore.getUser }}</h3>
    <div>
      <button @click="clickFun">变老</button>
      <button @click="clickFun2">变18</button>
    </div>
    <el-tabs stretch="true" type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <UserFilled
              style="
                width: 16px;
                position: relative;
                top: 3px;
                margin-right: 4px;
              "
            />
            <span>账号登录</span>
          </span>
        </template>
        账号：<el-input></el-input> 密码：<el-input></el-input>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <Iphone
              style="
                width: 16px;
                position: relative;
                top: 3px;
                margin-right: 4px;
              "
            />
            <span>手机登录</span>
          </span>
        </template>
        手机号：<el-input></el-input> 密码：<el-input></el-input>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 320px;

  .title {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>

