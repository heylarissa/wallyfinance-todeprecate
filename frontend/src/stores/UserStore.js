import { defineStore } from 'pinia'

const useUsersStore = defineStore('userStore', {
  state: () => {
    return {
      isAuthenticated: false,
      userData: null
    }
  },
  actions: {
    async authenticate(login, password) {
      try {
        var formdata = new FormData()
        formdata.append('username', login)
        formdata.append('password', password)

        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        }

        const response = await fetch('http://127.0.0.1:8000/jwt/create/', requestOptions) // envia requisição para o server
        this.userData = await response.json()
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
  getters: {},
  persist: true
})

export default useUsersStore
