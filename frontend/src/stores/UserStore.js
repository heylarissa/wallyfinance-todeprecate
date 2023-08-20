import { defineStore } from 'pinia'

const useUsersStore = defineStore('userStore', {
  state: () => {
    return {
      isAuthenticated: false,
      userData: null
    }
  },
  actions: {},
  getters: {
    async authenticate(login, password) {
      try {
        this.userData = login + password // envia requisição para o server
        alert(`Welcome back ${this.userData.first_name}!`)
      } catch (error) {
        alert(error)
      }
    },
    register() {},
    logout() {
      this.isAuthenticated = false
      this.userData = null
    }
  },
  persist: true
})
