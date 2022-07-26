import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'zhangsan',
      age: 18
    };
  },
  getters: {
    getUser(state) {
      return `用户的名字是${state.name}`;
    }
  },
  actions: {
    changeUserAge() {
      this.age = 18;
    }
  }
});
