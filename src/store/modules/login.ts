import { defineStore } from 'pinia';

export const useLoginStore = defineStore({
  id: 'login',
  state: () => {
    return {
      username: 'zhangsan',
      password: '123456'
    };
  }
});
