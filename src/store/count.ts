import { defineStore } from 'pinia';

const useCount = defineStore('count', {
  state: () => ({
    count: 10
  }),

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },

    doubleAddOne() {
      return this.doubleCount + 1;
    }
  },

  actions: {
    increment(num: number) {
      this.count += num;
    }
  }
});

export default useCount;
