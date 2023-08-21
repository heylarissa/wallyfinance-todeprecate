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
        var formdata = new FormData()
        formdata.append('username', login)
        formdata.append('password', password)
      
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        }

        this.userData = fetch('http://127.0.0.1:8000/jwt/create/', requestOptions) // envia requisição para o server
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

export default useUsersStore
