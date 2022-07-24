<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    let size = '16px';
  }
})
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs stretch="true" type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <UserFilled style="width: 16px; position: relative; top: 3px;  margin-right: 4px" />
            <span>账号登录</span>
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <Iphone style="width: 16px; position: relative; top: 3px; margin-right: 4px" />
            <span>手机登录</span>
          </span>
        </template>
        手机登录
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

