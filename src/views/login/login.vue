<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import LoginPanel from './child-cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {

    }
  }
})
</script>

<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

}
</style>
