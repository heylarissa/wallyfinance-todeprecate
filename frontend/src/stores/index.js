import {defineStore} from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () => {
        if (localStorage.getItem("counter"))
          return JSON.parse(localStorage.getItem("counter"));
        return {
          count: 0,
        };
      },
    getters: {
      double: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })
  